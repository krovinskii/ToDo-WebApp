import { addUserInput } from "./addTask.js";
import { userInputDOM, userInputProjectDOM } from "./userInputDOM";
import { addUserProjectInput } from "./addUserProject";
import { userInputManager } from "./userInputManager";

const ModalUtils = {
  open: (modal) => {
    modal.showModal();
    modal.style.display = "flex";
  },

  close: (modal) => {
    modal.close();
    modal.style.display = "none";
  },
};

const TaskModalEvents = {
  addButton: () => {
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskModal = document.getElementById("taskModal");
    addTaskBtn.addEventListener("click", () => ModalUtils.open(taskModal));
  },

  closeButton: () => {
    const closeDialogBtn = document.getElementById("closeBtn");
    const taskModal = document.getElementById("taskModal");
    closeDialogBtn.addEventListener("click", () => ModalUtils.close(taskModal));
  },

  submit: () => {
    const submitTaskBtn = document.getElementById("submitTaskBtn");
    const taskModal = document.getElementById("taskModal");

    submitTaskBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const { input } = addUserInput();
      userInputDOM.createTaskDOM(input);
      ModalUtils.close(taskModal);
    });
  },
  edit: () => {
    const appContainer = document.querySelector(".appContainer");
    if (!appContainer) {
      console.error("appContainer not found");
      return;
    }

    appContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("editBtn")) {
        const editBtn = e.target;
        const editRow = editBtn.closest(".appDisplayEditRow");
        const activeDisplay = editRow.closest(".appDisplay");

        if (!activeDisplay) {
          console.error("Active display not found");
          return;
        }

        const taskElements = [
          editRow.nextElementSibling,
          editRow.nextElementSibling.nextElementSibling,
          editRow.nextElementSibling.nextElementSibling.nextElementSibling,
        ];

        const isEditing = editBtn.classList.toggle("editing");
        editBtn.textContent = isEditing ? "SAVE" : "EDIT";
        editBtn.style.backgroundColor = isEditing ? "green" : "#0088cc";

        if (!isEditing) {
          const taskIndex =
            Array.from(activeDisplay.children).indexOf(editRow) / 6;
          const updatedTask = {
            task: taskElements[0].textContent,
            time: taskElements[1].textContent.split(" ")[0],
            date: taskElements[1].textContent.split(" ")[1],
            location: taskElements[2].textContent,
          };
          userInputManager.updateTask(taskIndex, updatedTask);
        }

        taskElements.forEach((element) => {
          if (element) {
            element.contentEditable = isEditing;
            element.classList.toggle("editing");
            element.style.border = isEditing ? "2px solid #0088cc" : "none";
          }
        });
      }
    });
  },

  deleteButton: () => {
    const appContainer = document.querySelector(".appContainer");
    if (!appContainer) {
      console.error("appContainer not found");
      return;
    }

    appContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("deleteBtn")) {
        userInputDOM.deleteTask(e);
      }
    });
  },
};

const ProjectModalEvents = {
  addButton: () => {
    const addProjectBtn = document.getElementById("addProjectBtn");
    const projectModal = document.getElementById("projectModal");
    addProjectBtn.addEventListener("click", () =>
      ModalUtils.open(projectModal)
    );
  },

  closeButton: () => {
    const closeProjectBtn = document.getElementById("closeProjectBtn");
    const projectModal = document.getElementById("projectModal");
    closeProjectBtn.addEventListener("click", () =>
      ModalUtils.close(projectModal)
    );
  },

  submit: () => {
    const submitProjectBtn = document.getElementById("submitProjectBtn");
    const projectModal = document.getElementById("projectModal");
    const projectForm = document.getElementById("projectForm");

    console.log("Submit button:", submitProjectBtn);
    console.log("Project form:", projectForm);

    if (!submitProjectBtn || !projectForm) {
      console.error("Required elements not found");
      return;
    }

    submitProjectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Submit clicked");

      const { input } = addUserProjectInput();
      console.log("Project input:", input);

      if (input && input.title) {
        userInputProjectDOM.createProjectDOM(input);
        projectForm.reset();
        ModalUtils.close(projectModal);
      } else {
        console.error("Invalid project input");
      }
    });
  },

  swapProjects: () => {
    document.getElementById("projectLists").addEventListener("click", (e) => {
      if (e.target.classList.contains("projectBtn")) {
        const projectId = e.target.id;

        const currentProject = document.querySelector(".projectHolderCurrent");
        if (currentProject) {
          currentProject.classList.remove("projectHolderCurrent");
        }

        e.target.classList.add("projectHolderCurrent");

        document.querySelectorAll(".appDisplay").forEach((display) => {
          display.style.display = "none";
        });

        const projectNum = projectId.replace("project", "");
        const displayId = `appDisplay${projectNum}`;
        const targetDisplay = document.getElementById(displayId);
        if (targetDisplay) {
          targetDisplay.style.display = "grid";
        }
      }
    });
  },
};

export const initialize = () => ({
  addTaskButtonListener: TaskModalEvents.addButton,
  closeTaskModalListener: TaskModalEvents.closeButton,
  addProjectButtonListener: ProjectModalEvents.addButton,
  closeProjectModalListener: ProjectModalEvents.closeButton,
  swapProjects: ProjectModalEvents.swapProjects,
  submitUserTask: TaskModalEvents.submit,
  deleteTaskRow: TaskModalEvents.deleteButton,
  submitProjectBtn: ProjectModalEvents.submit,
  editTaskBtn: TaskModalEvents.edit,
});
