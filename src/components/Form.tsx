import { useState, ChangeEvent, useEffect } from "react";
import { ITask } from "../interfaces"
import TodoItem from "./TodoItem";

function Form() {

  const [taskValue, setTaskValue] = useState<string>('');
  const [tasksList, setTasksList] = useState<ITask[]>(loadSavedTasks());


  function loadSavedTasks(){
    const data = localStorage.getItem('tasks');
    const json = JSON.parse(data || '""')
    if (json){
      return json
    }
    return [];
  }

  // Update local storage whenever TODOs change
  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasksList))
  }, [tasksList])


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskValue(e.target.value)
  }

  const deleteTask = (deleteTask: string): void => {
    setTasksList(tasksList.filter((task)=>{
      return task.text !== deleteTask;
    }))
  }

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    // check empty task
    if (taskValue.trim().length === 0) {
      alert("Please enter a value!");
      return;
    }


    const newTaskValue = { id: Date.now(), text: taskValue, isDone: false }
    setTasksList([...tasksList, newTaskValue])
    setTaskValue("")
  }

  return (
    <div className="pm-8 shadow-xl border">
      <h1 className="text-center font-bold py-4 bg-sky-600 text-white w-[full] mb-8 text-2xl">Tasks List</h1>
      <form className="px-4 mb-4 font-opensans" onSubmit={handleSubmit}>
        <input type="text" className="outline-none bg-transparent
        border border-gray-500 p-2 w-[500px] text-gray mb-8 rounded
        placeholder:text-gray-300" placeholder="What would you like to do?" onChange={handleInputChange} value={taskValue} />

        <button className="bg-gray-700 border-none p-2 text-white cursor-pointer rounded ml-2">Add Task</button>
      </form>

      <div className="todos px-4">
        {
          tasksList.map((task:ITask, key: number) => {
            return <TodoItem key={key} task={task} completeTask={deleteTask}/>
          })
        }
      </div>

    </div>
  )
}
export default Form