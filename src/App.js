import { Route } from 'react-router-dom';
import Home from './components/Home';
import TaskLog from './components/TaskLog';
import TaskForm from './components/TaskForm';


function App() {
  return (
    <div className="App">
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/taskLog">
        <TaskLog />
      </Route>
      <Route path="/taskForm">
        <TaskForm />
      </Route>
    </div>
  );
}

export default App;
