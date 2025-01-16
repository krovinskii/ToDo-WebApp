import "./styles.css";
import { initialize } from "./eventListeners.js";
import { exportedDate } from "./todaysDate.js";

//When DOM is loaded, we set up all of our buttons functionality.
document.addEventListener("DOMContentLoaded", () => {
  const date = exportedDate;
  const handlers = initialize();

  Object.entries(handlers).forEach(([_, handler]) => handler());
});

//edit doesnt work on other projects besides the first one
//delete doesnt work on other projects besides the first one
//if after the second prokect, aka a created one, it applies the task to the default and the created project.
