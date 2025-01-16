// addTask.js
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
    const appDisplay = document.getElementById("appDisplay");
    appDisplay.addEventListener("click", (e) => {
      if (e.target.classList.contains("editBtn")) {
        const editBtn = e.target;
        const editRow = editBtn.closest(".appDisplayEditRow");
        const taskElements = [
          editRow.nextElementSibling,
          editRow.nextElementSibling.nextElementSibling,
          editRow.nextElementSibling.nextElementSibling.nextElementSibling,
        ];

        const isEditing = editBtn.classList.toggle("editing");
        editBtn.textContent = isEditing ? "SAVE" : "EDIT";
        editBtn.style.backgroundColor = isEditing ? "green" : "#0088cc";

        // If saving, update the task in userInputManager
        if (!isEditing) {
          const taskIndex =
            Array.from(appDisplay.children).indexOf(editRow) / 6; // 6 elements per task

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
          }
        });
      }
    });
  },

  deleteButton: () => {
    const appDisplay = document.getElementById("appDisplay");
    appDisplay.addEventListener("click", (e) => {
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

    submitProjectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const { input } = addUserProjectInput();
      userInputProjectDOM.createProjectDOM(input);
      ModalUtils.close(projectModal);
    });
  },
};

export const initialize = () => ({
  addTaskButtonListener: TaskModalEvents.addButton,
  closeTaskModalListener: TaskModalEvents.closeButton,
  addProjectButtonListener: ProjectModalEvents.addButton,
  closeProjectModalListener: ProjectModalEvents.closeButton,
  submitUserTask: TaskModalEvents.submit,
  deleteTaskRow: TaskModalEvents.deleteButton,
  submitProjectBtn: ProjectModalEvents.submit,
  editTaskBtn: TaskModalEvents.edit,
});
