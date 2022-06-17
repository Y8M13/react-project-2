import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const TaskLog = ()  => {
    useEffect(() => {
      //  fetchTodos();
       fetchTaskers();
    }, []);

  // const [todos, setTodos] = useState([]); 
  const [taskers, setTaskers] = useState([]); 

    const fetchTaskers = async () => {
      //  const data = await fetch( 'https://jsonplaceholder.typicode.com/todos' );
      const data = await fetch( 'http://localhost:4000' );

      // const todos = await data.json();
      const taskers = await data.json();
      console.log(taskers);
      // setTodos(todos);
      setTaskers(taskers);
      taskers = data;
    };

  return (
    <div>
      <h2>Task Log</h2>
      {taskers.map(tasker =>(
        <h1 key={ tasker.id }>
        {/* <Link to={`/tasklog/${todo.id}`}>{ todo.title }</Link>   */}
        <Link to={`/tasklog/${tasker.id}`}>{ tasker.date }</Link>  
        </h1> 
      ))}
    </div>
  );
}

export default TaskLog;