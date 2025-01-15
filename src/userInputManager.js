const createInputManager = () => {
  let userInputArray = [];

  const addInput = (input) => {
    userInputArray.push(input);
    return userInputArray;
  };

  const getAllInputs = () => userInputArray;

  return { addInput, getAllInputs };
};

export const userInputManager = createInputManager();
