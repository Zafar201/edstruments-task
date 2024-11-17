///task related functions


export const fetchTasks = (username) => {
    const storedTasks = JSON.parse(localStorage.getItem(`tasks_${username}`)) || [];
    return storedTasks;
  };
  
  export const saveTasks = (username, tasks) => {
    localStorage.setItem(`tasks_${username}`, JSON.stringify(tasks));
  };
  
  export const deleteTask = (tasks, taskId, username) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    saveTasks(username, updatedTasks);
    return updatedTasks;
  };
  
  export const toggleTaskComplete = (tasks, taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    return updatedTasks;
  };
  
  export const addOrUpdateTask = (tasks, task, username) => {
    if (task.id) {
      //update the task if editingh
      const updatedTasks = tasks.map((t) =>
        t.id === task.id ? { ...t, title: task.title } : t
      );
      saveTasks(username, updatedTasks);
      return updatedTasks;
    } else {
      // else add new task
      const newTask = { id: Date.now(), title: task.title, completed: false };
      const updatedTasks = [...tasks, newTask];
      saveTasks(username, updatedTasks);
      return updatedTasks;
    }
  };
  