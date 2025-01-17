const TaskComponents = {
  utils: {
    createGridElement: (className, text = "") => {
      const element = document.createElement("div");
      element.className = className;
      element.textContent = text;
      return element;
    },

    createButton: (text, className) => {
      const button = document.createElement("button");
      button.textContent = text;
      button.className = className;
      return button;
    },

    createCheckbox: (checked) => {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = checked;
      checkbox.className = "taskCheckbox";
      return checkbox;
    },
  },

  elements: {
    createActionButtons: () => {
      const buttonRow =
        TaskComponents.utils.createGridElement("appDisplayEditRow");
      const editBtn = TaskComponents.utils.createButton("EDIT", "editBtn");
      buttonRow.appendChild(editBtn);
      return buttonRow;
    },

    createDeleteRow: () => {
      const deleteRow = TaskComponents.utils.createGridElement(
        "appDisplayDeleteRow"
      );
      const deleteBtn = TaskComponents.utils.createButton("X", "deleteBtn");
      deleteRow.appendChild(deleteBtn);
      return deleteRow;
    },

    createCheckboxWrapper: (checked) => {
      const wrapper = TaskComponents.utils.createGridElement(
        "appDisplayCompletedData"
      );
      const checkbox = TaskComponents.utils.createCheckbox(checked);
      wrapper.appendChild(checkbox);
      return wrapper;
    },
  },
};

export const userInputDOM = {
  getInputs: () => ({
    task: document.getElementById("userTaskInput").value,
    date: document.getElementById("userDateInput").value,
    time: document.getElementById("userTimeInput").value,
    location: document.getElementById("userLocationInput").value,
    completed: document.getElementById("userCompletedInput").checked,
  }),

  sortTasksInDOM: (activeDisplay) => {
    const taskGroups = [];
    const displayChildren = Array.from(activeDisplay.children);

    // Skip grid headers (first 6 elements)
    for (let i = 6; i < displayChildren.length; i += 6) {
      const group = displayChildren.slice(i, i + 6);
      if (group.length === 6) {
        taskGroups.push(group);
      }
    }

    // Sort by datetime
    taskGroups.sort((a, b) => {
      const dateTimeA = a[2].textContent.split(" "); // [time, date]
      const dateTimeB = b[2].textContent.split(" ");

      const timestampA = new Date(`${dateTimeA[1]} ${dateTimeA[0]}`);
      const timestampB = new Date(`${dateTimeB[1]} ${dateTimeB[0]}`);

      return timestampA - timestampB;
    });

    // Remove and reinsert
    taskGroups.flat().forEach((element) => element.remove());
    taskGroups.flat().forEach((element) => activeDisplay.appendChild(element));
  },

  createTaskDOM: (input) => {
    const activeDisplay = document.querySelector(
      '.appDisplay[style*="display: grid"]'
    );
    if (!activeDisplay) {
      console.error("No active project display found");
      return;
    }

    const elements = [
      TaskComponents.elements.createActionButtons(),
      TaskComponents.utils.createGridElement("appDisplayTaskData", input.task),
      TaskComponents.utils.createGridElement(
        "appDisplayDateTimeData",
        `${input.time} ${input.date}`
      ),
      TaskComponents.utils.createGridElement(
        "appDisplayLocationData",
        input.location
      ),
      TaskComponents.elements.createCheckboxWrapper(input.completed),
      TaskComponents.elements.createDeleteRow(),
    ];

    elements.forEach((element) => activeDisplay.appendChild(element));
    userInputDOM.sortTasksInDOM(activeDisplay);
  },

  deleteTask: (e) => {
    const deleteBtn = e.target;
    const deleteRow = deleteBtn.closest(".appDisplayDeleteRow");
    if (!deleteRow) return;

    const taskElements = [
      deleteRow.previousElementSibling,
      deleteRow.previousElementSibling.previousElementSibling,
      deleteRow.previousElementSibling.previousElementSibling
        .previousElementSibling,
      deleteRow.previousElementSibling.previousElementSibling
        .previousElementSibling.previousElementSibling,
      deleteRow.previousElementSibling.previousElementSibling
        .previousElementSibling.previousElementSibling.previousElementSibling,
      deleteRow,
    ];

    taskElements.forEach((element) => {
      if (element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    });
  },
};

export const userInputProjectDOM = {
  getInputs: () => {
    const userProjectTitle = document.getElementById("userProjectInput").value;
    const userProjectNotes = document.getElementById("userProjectNotes").value;
    return {
      title: userProjectTitle,
      notes: userProjectNotes,
    };
  },

  createProjectDOM: (input) => {
    const { title } = input;
    const projectParent = document.getElementById("projectLists");
    const appContainer = document.querySelector(".appContainer");

    if (!appContainer) {
      console.error("appContainer not found");
      return;
    }

    const newProject = document.createElement("li");
    newProject.innerText = title;
    newProject.classList.add("projectBtn");
    newProject.id = `project${projectParent.children.length + 1}`;

    const projectDisplay = document.createElement("div");
    projectDisplay.className = "appDisplay";
    projectDisplay.id = `appDisplay${projectParent.children.length + 1}`;
    projectDisplay.style.display = "none";

    projectDisplay.innerHTML = `
        <div class="appDisplayTitle" id="blank1"></div>
        <div class="appDisplayTitle" id="task">Task</div>
        <div class="appDisplayTitle" id="datetime">Date & Time</div>
        <div class="appDisplayTitle" id="location">Location</div>
        <div class="appDisplayTitle" id="completed">Completed</div>
        <div class="appDisplayTitle" id="blank2"></div>
    `;

    const addTaskButton = document.querySelector(".addTask");
    if (addTaskButton) {
      appContainer.insertBefore(projectDisplay, addTaskButton);
    } else {
      appContainer.appendChild(projectDisplay);
    }

    projectParent.appendChild(newProject);
  },
};

const ProjectModalEvents = {
  swapProjects: () => {
    document.getElementById("projectLists").addEventListener("click", (e) => {
      if (e.target.classList.contains("projectBtn")) {
        const projectId = e.target.id;
        const displayId = `appDisplay-${projectId.split("-")[1]}`;

        document.querySelectorAll(".appDisplay").forEach((display) => {
          display.style.display = "none";
        });

        const targetDisplay = document.getElementById(displayId);
        if (targetDisplay) {
          targetDisplay.style.display = "grid";
        }
      }
    });
  },
};
