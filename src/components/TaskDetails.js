import React, { useState, useEffect } from 'react';


const TaskDetails = ()  => {
    useEffect(() => {}, []);

    // const [todo, setTodo] = useState({}); 
    const [task, setTask] = useState({}); 

    return (
      <div>
        <h1>To Do List</h1>
        {/* setTodo(todo); */}
      </div>
  );
}

export default TaskDetails;