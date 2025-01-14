// addTask.js
import { userInputData } from "./addTask.js"; //imported to get data from add task modal. need to make event for the submit btn to invoke this. then take that obj whereever it is stored. is it here or addtask? anyways after that we will have a new module for adding the dom elements.
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

  return {
    addTaskButtonListener,
    closeTaskModalListener,
    addProjectButtonListener,
    closeProjectModalListener,
  };
};
