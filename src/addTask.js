import { userInputDOM } from "./userInputDOM";
import { userInputManager } from "./userInputManager";

export const addUserInput = () => {
  const input = userInputDOM.getInputs();
  const updatedInputs = userInputManager.addInput(input);
  console.log("Updated Input Array:", updatedInputs);
  return {
    input,
    updatedInputs,
  };
};
