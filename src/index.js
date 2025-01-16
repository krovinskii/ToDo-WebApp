import "./styles.css";
import { initialize } from "./eventListeners.js";
import { exportedDate } from "./todaysDate.js";

//When DOM is loaded, we set up all of our buttons functionality.
document.addEventListener("DOMContentLoaded", () => {
  const date = exportedDate;
  const handlers = initialize();

  Object.entries(handlers).forEach(([_, handler]) => handler());
});
