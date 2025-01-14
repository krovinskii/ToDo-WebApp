const getUserInputElements = () => {
  const grabInput = () => {
    const userTaskInput = document.getElementById("userTaskInput");
    const userDateInput = document.getElementById("userDateInput");
    const userTimeInput = document.getElementById("userTimeInput");
    const userLocationInput = document.getElementById("userLocationInput");
    const userCompletedInput = document.getElementById("userCompletedInput");
    return {
      task: userTaskInput,
      date: userDateInput,
      time: userTimeInput,
      location: userLocationInput,
      completed: userCompletedInput,
    };
  };
  return { grabInput };
};
export const userInputData = {
  grabInput: getUserInputElements().grabInput,
};

//Purpose is to get the data out of the modal.
