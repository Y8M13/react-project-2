import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import TaskLog from './components/TaskLog.js';
import TaskForm from './components/TaskForm.js';
import MainHeader from './components/MainHeader.js';
// import './index.css';


function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path='/taskLog'>
         <TaskLog />
        </Route>
        <Route path='/taskForm'>
         <TaskForm />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
      </main>
    </div>
  );
}

export default App;
