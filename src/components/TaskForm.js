import React from 'react';


const handleSubmit = (e) => {
  e.preventDefault();
  console.log("You clicked a button.");
}

const TaskForm = () => {
  return (
    <div className="container">
      <h1>Add New Task</h1>
      <form>
        <h2>Add New Task</h2>
        <div>
          <label htmlFor="date">Date</label>
          <input type="text" date="date" id="date" />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <input type="text" status="status" id="status" />
        </div>
        <div>
          <label htmlFor="deadline">Deadline</label>
          <input type="text" deadline="deadline" id="name" />
        </div>
        <div>
          <label htmlFor="comments">Comments</label>
          <input type="text" comments="comments" id="comments" />
        </div>
        <br/>
        {/* <button type="submit" className="btn">Submit</button> */}
        <button onClick={handleSubmit}>
          Submit
        </button>
      </form>   
    </div> 
  )
}

export default TaskForm;