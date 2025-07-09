import React, { createContext, useState } from 'react'

const InputForm
 = (ask) => {
    const [Title, setTitle] = useState(Title)
    const [taskList, setTaskList] = useState(Task)

    const [Task, setTask] = useState([{"Title": "", "Task": []}])

    const TaskContext = createContext(Task)
  return (
    <div>
        <input 
            className='h-10 w-100 focus:border-2 focus:border-teal-300 focus:outline-none focus:ring-0 border-solid border-2 rounded-lg lue-500 p-2 m-2' 
            type="text" 
            value={Title} 
            onChange={(e)=>setTitle(e.target.value)} 
            />
        <input 
            className='h-10 w-100 border-solid border-2 rounded-lg lue-500 p-2 m-2 focus:border-2 focus:border-teal-300 focus:outline-none focus:ring-0' 
            type="text" 
            value={taskList} 
            onChange={(e)=>setTaskList(e.target.value)} />
 
        <button
         className='bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300'
         onClick={() => {
          
          onAddTaskclicked({Title, taskList})
          }}>
          add task
        </button></div>
  )
}

export default InputForm
