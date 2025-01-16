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

  createTaskDOM: (input) => {
    const tasksParent = document.getElementById("appDisplay");
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

    elements.forEach((element) => tasksParent.appendChild(element));
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
    const newProject = document.createElement("li");
    newProject.innerText = title;
    console.log(title);

    projectParent.appendChild(newProject);
  },
};
