import "./styles.css";
import { initialize } from "./addTask.js";
import { greeting } from "./addTask.js";
document.addEventListener("DOMContentLoaded", () => {
  const { pressTaskBtn, pressDialogBtn } = initialize();
  pressTaskBtn();
  pressDialogBtn();
});
