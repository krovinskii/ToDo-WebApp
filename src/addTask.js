// addTask.js
export const initialize = () => {
  const pressTaskBtn = () => {
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskModal = document.getElementById("taskModal");
    addTaskBtn.addEventListener("click", () => {
      taskModal.showModal();
      taskModal.style.display = "flex";
    });
  };

  const pressDialogBtn = () => {
    const closeDialogBtn = document.getElementById("closeBtn");
    const taskModal = document.getElementById("taskModal");
    closeDialogBtn.addEventListener("click", () => {
      taskModal.close();
      taskModal.style.display = "none";
    });
  };

  return { pressTaskBtn, pressDialogBtn };
};

//refactor, make the eventlistener functions elsewhere so code isnt so tight
