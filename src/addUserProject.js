import { userInputProjectDOM } from "./userInputDOM";
import { userInputManager } from "./userInputManager";

export const addUserProjectInput = () => {
  const input = userInputProjectDOM.getInputs();
  const updatedInputs = userInputManager.addProjectInput(input);
  console.log(input);
  return { input, updatedInputs };
};
