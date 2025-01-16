// addTask.js
import { addUserInput } from "./addTask.js";
import { userInputDOM } from "./userInputDOM";
export const initialize = () => {
  // Utility functions for adding and removing modal functionality
  const openModal = (modal) => {
    modal.showModal();
    modal.style.display = "flex";
  };

  const closeModal = (modal) => {
    modal.close();
    modal.style.display = "none";
  };

  // Event listener functions
  const addTaskButtonListener = () => {
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskModal = document.getElementById("taskModal");
    addTaskBtn.addEventListener("click", () => openModal(taskModal));
  };

  const closeTaskModalListener = () => {
    const closeDialogBtn = document.getElementById("closeBtn");
    const taskModal = document.getElementById("taskModal");
    closeDialogBtn.addEventListener("click", () => closeModal(taskModal));
  };

  const addProjectButtonListener = () => {
    const addProjectBtn = document.getElementById("addProjectBtn");
    const projectModal = document.getElementById("projectModal");
    addProjectBtn.addEventListener("click", () => openModal(projectModal));
  };

  const closeProjectModalListener = () => {
    const closeProjectBtn = document.getElementById("closeProjectBtn");
    const projectModal = document.getElementById("projectModal");
    closeProjectBtn.addEventListener("click", () => closeModal(projectModal));
  };
  const submitUserTask = () => {
    const submitTaskBtn = document.getElementById("submitTaskBtn");
    submitTaskBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const { input } = addUserInput(); // Destructure returned input
      userInputDOM.createTaskDOM(input); // Pass input as parameter
    });
  };

  return {
    addTaskButtonListener,
    closeTaskModalListener,
    addProjectButtonListener,
    closeProjectModalListener,
    submitUserTask,
  };
};
