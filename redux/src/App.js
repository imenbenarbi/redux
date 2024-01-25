
import './App.css';
import AddTask from "./comp/Addtask";
import TaskList from "./comp/Tasklist"
export default function App() {
  return (
    <div className="App">
      <AddTask />
      <TaskList />
    </div>
  );
}