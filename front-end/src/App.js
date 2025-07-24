import './App.css';
import AddTask from './components/AddTask';
import Sidebar from './components/Sidebar';
import TasksPage from './components/TasksPage';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>

        <Route path='/addTask' element={<AddTask />} />
        <Route path='/' element={<TasksPage />} />
      </Routes>
    </div>
  );
}

export default App;
