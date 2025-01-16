const createInputManager = () => {
  let userInputArray = [];
  let userProjectArray = [];

  const addInput = (input) => {
    userInputArray.push(input);
    return userInputArray;
  };

  const addProjectInput = (input) => {
    userProjectArray.push(input);
    return userProjectArray;
  };

  const getAllInputs = () => userInputArray;
  const getAllProjects = () => userProjectArray;

  return { addInput, getAllInputs, addProjectInput, getAllProjects };
};

export const userInputManager = createInputManager();
