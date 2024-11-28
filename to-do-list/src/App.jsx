import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import "./style/App.css";
import TaskGroup from "./TaskGroup";
import Footer from "./Footer";

function App() {
  const [newTask, setNewTask] = useState(""); //the task in the search bar
  const [tasks, setTasks] = useState(()=>{  // the array contain all the task content and inseet to local storage
    const saved=localStorage.getItem('tasks');
    return saved? JSON.parse(saved):[];

  });
   
  const handleChange = (e) => { // gets the text from the search bar
    setNewTask(e.target.value);
  };

  const addTask = () => { // add the task from the search bar to the task group
    const newTasks = { id: Date.now(), text: newTask, completed: false };
    newTask.trim()!==''?(setTasks([...tasks, newTasks])):(console.log('field is empty'))
    setNewTask(""); // cleans the search bar update clicking
  };


  const handleKeyPress =(e)=>{// add the task by ENTER key
    if(e.key==='Enter')
      addTask()
  }

  const handleCheckedBoxChange = (id) => {//marked if the task completed or not
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (id) => {
    setTasks((oldTask) => oldTask.filter((task) => task.id !== id));
  };

  const updateTask = (id) => {
    setTasks((oldTask) =>
      oldTask.map((task) =>
        task.id === id ? { ...task, text: newTask || task.text } : task
      )
    );
    setNewTask("");
  };

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks])

  return (
    <div className='warpper'>
      <h1 className='title'>To Do List</h1>
      <SearchBar
        newTask={newTask}
        handleChange={handleChange}
        addTask={addTask}
        handleKeyPress={handleKeyPress}
      />
      <TaskGroup
        tasks={tasks}
        handleCheckedBoxChange={handleCheckedBoxChange}
        removeTask={removeTask}
        updateTask={updateTask}
      />
      <Footer/>
    </div>
  );
}

export default App;
