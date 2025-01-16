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

  const updateTask = (index, updatedTask) => {
    console.log("Before update:", userInputArray);
    console.log("Updating task at index:", index);
    console.log("Updated task data:", updatedTask);

    if (index >= 0 && index < userInputArray.length) {
      userInputArray[index] = {
        ...userInputArray[index],
        ...updatedTask,
      };
      console.log("After update:", userInputArray);
    }
    return userInputArray;
  };

  return {
    addInput,
    getAllInputs,
    addProjectInput,
    getAllProjects,
    updateTask,
  };
};

export const userInputManager = createInputManager();
