import "./styles.css";
import { initialize } from "./eventListeners.js";
import { exportedDate } from "./todaysDate.js";

//When DOM is loaded, we set up all of our buttons functionality.
document.addEventListener("DOMContentLoaded", () => {
  const date = exportedDate;

  const {
    addTaskButtonListener,
    closeTaskModalListener,
    addProjectButtonListener,
    closeProjectModalListener,
    submitUserTask,
  } = initialize();
  addTaskButtonListener();
  closeTaskModalListener();
  addProjectButtonListener();
  closeProjectModalListener();
  submitUserTask();
});
