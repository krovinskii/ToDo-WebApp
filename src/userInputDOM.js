export const userInputDOM = {
  getInputs: () => {
    const userTaskInput = document.getElementById("userTaskInput").value;
    const userDateInput = document.getElementById("userDateInput").value;
    const userTimeInput = document.getElementById("userTimeInput").value;
    const userLocationInput =
      document.getElementById("userLocationInput").value;
    const userCompletedInput =
      document.getElementById("userCompletedInput").checked;

    return {
      task: userTaskInput,
      date: userDateInput,
      time: userTimeInput,
      location: userLocationInput,
      completed: userCompletedInput,
    };
  },
  createTaskDOM: (input) => {
    const {
      task: currentTaskName,
      date,
      time,
      location: currentTaskLocation,
      completed: currentTaskCompleted,
    } = input;

    const currentTaskTime = ` ${time} ${date}`;
    const tasksParent = document.getElementById("appDisplay");

    //edit
    const editRow = document.createElement("div");
    editRow.className = "appDisplayEditRow";
    const editBtn = document.createElement("button");
    editBtn.textContent = "EDIT";
    editBtn.className = "editBtn";
    editRow.appendChild(editBtn);
    //task name
    const taskName = document.createElement("div");
    taskName.textContent = currentTaskName;
    taskName.className = "appDisplayTaskData";
    //task time
    const taskTime = document.createElement("div");
    taskTime.textContent = currentTaskTime;
    taskTime.className = "appDisplayDateTimeData";
    //task location
    const taskLocation = document.createElement("div");
    taskLocation.textContent = currentTaskLocation;
    taskLocation.className = "appDisplayLocationData";
    //task checkbox
    const taskCompletedContainer = document.createElement("div");
    taskCompletedContainer.className = "appDisplayCompletedData";

    const taskCompleted = document.createElement("input");
    taskCompleted.type = "checkbox";
    taskCompleted.checked = currentTaskCompleted;
    taskCompleted.className = "appDisplayCompletedData";

    taskCompletedContainer.appendChild(taskCompleted);
    //task delete row
    const deleteRowBtnRow = document.createElement("div");
    deleteRowBtnRow.className = "appDisplayDeleteRow";

    const deleteRowBtn = document.createElement("button");
    deleteRowBtn.className = "deleteBtn";
    deleteRowBtn.innerText = "X";

    deleteRowBtnRow.appendChild(deleteRowBtn);

    //append to existing div
    tasksParent.appendChild(editRow);
    tasksParent.appendChild(taskName);
    tasksParent.appendChild(taskTime);
    tasksParent.appendChild(taskLocation);
    tasksParent.appendChild(taskCompletedContainer);
    tasksParent.appendChild(deleteRowBtnRow);
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
