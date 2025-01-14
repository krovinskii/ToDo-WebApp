import "./styles.css";
import { initialize } from "./eventListeners.js";

//When DOM is loaded, we set up all of our buttons functionality.
document.addEventListener("DOMContentLoaded", () => {
  const {
    addTaskButtonListener,
    closeTaskModalListener,
    addProjectButtonListener,
    closeProjectModalListener,
  } = initialize();
  addTaskButtonListener();
  closeTaskModalListener();
  addProjectButtonListener();
  closeProjectModalListener();
});
