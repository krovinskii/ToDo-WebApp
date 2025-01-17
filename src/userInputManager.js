const createInputManager = () => {
  let userInputArray = [];
  let userProjectArray = [];

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date
      .getDate()
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
  };

  const formatTime = (timeStr) => {
    const [hours, minutes] = timeStr.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes}${ampm}`;
  };

  const sortTasksByDate = () => {
    userInputArray.sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return dateA - dateB;
    });
  };

  const addInput = (input) => {
    const formattedInput = {
      ...input,
      date: formatDate(input.date),
      time: formatTime(input.time),
    };
    userInputArray.push(formattedInput);
    sortTasksByDate();
    return userInputArray;
  };

  const addProjectInput = (input) => {
    userProjectArray.push(input);
    return userProjectArray;
  };

  const getAllInputs = () => {
    sortTasksByDate();
    return userInputArray;
  };

  const getAllProjects = () => userProjectArray;

  const updateTask = (index, updatedTask) => {
    if (index >= 0 && index < userInputArray.length) {
      userInputArray[index] = {
        ...userInputArray[index],
        ...updatedTask,
        date: formatDate(updatedTask.date),
      };
      sortTasksByDate();
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
