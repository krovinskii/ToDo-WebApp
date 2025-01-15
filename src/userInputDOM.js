export const userInputDOM = {
  getInputs: () => {
    const userTaskInput = document.getElementById("userTaskInput").value;
    const userDateInput = document.getElementById("userDateInput").value;
    const userTimeInput = document.getElementById("userTimeInput").value;
    const userLocationInput =
      document.getElementById("userLocationInput").value;
    const userCompletedInput =
      document.getElementById("userCompletedInput").checked;

    return {
      task: userTaskInput,
      date: userDateInput,
      time: userTimeInput,
      location: userLocationInput,
      completed: userCompletedInput,
    };
  },
};
