import React, { useState, useEffect } from 'react';


const TaskLog = ()  => {

    useEffect(() => {
       fetchTasks();
    }, []);

   const [tasks, setTasks] = useState([]); 

   const fetchTasks = async () => {
     const data = await fetch('http://localhost:3000/tasks');

     const tasks = await data.json();
     console.log(tasks);
     setTasks(tasks);
   };

  return (
    <div>
      {tasks.map(task =>(
        <h1 key={ task.id }>{ task.name }</h1>
      ))}
    </div>
  )
}

export default TaskLog;