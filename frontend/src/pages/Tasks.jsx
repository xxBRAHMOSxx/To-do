import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from "js-cookie"

import { deleteTask, getTasks, newTask } from '../store/taskStore'
import TaskListWithFlexBox from '../components/TaskListWithFlexBox'
// import InputForm from '../components/InputForm'

export default function Tasks() {
  const [Title, setTitle] = useState()
  const [taskList, setTaskList] = useState()
  const [Taskdata, setTaskData] = useState([])
  
  const navigate = useNavigate()
 
  let array = []
  const user = JSON.parse(localStorage.getItem('user'))
  const token = Cookies.get("token")
  const userId = Cookies.get('userId')

  useEffect(() => {
  //  user = JSON.parse(localStorage.getItem('user'))
    if (!token || !userId) {
      navigate('/')
    }
    // console.log(token);
    fetchTasks(user.userId)              
   
  },[])
  
  const fetchTasks = async (userId) => {
    try {
     const data = await getTasks(userId)
  

    array = data.map((task) => {
      return {
        Title: task.Title,
        Task: task.Task,
        _id: task._id,
      }
    })
    setTaskData(array)
    
    console.log("Fetched tasks:", array);    
    } catch (error) {
      console.error("Error fetching tasks:", error);
      
    }
  }

  const onAddTaskclicked = async (Title, taskList,user) => {

    if (!Title || !taskList) {
      alert("Please enter both title and task")
      return
    }
    try {
      await newTask(Title, taskList, user.userId)
      console.log("New task created successfully");
      // setTitle('')
      // setTaskList('')
      fetchTasks(user.userId)
    } catch (error) {
      console.error("Error creating new task:", error);
      alert("Failed to create new task")
    }
  }

  const onDeleteTaskClicked = async (taskId) => {
    if (!taskId) {
      alert("Please provide a valid task ID")
      return
    }
    try {

      await deleteTask(taskId)
      console.log("Task deleted successfully",);
      fetchTasks(user.userId)
      
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Failed to delete task")
      
    }
  
  }

  return (

    <>
      <div className='flex flex-col items-center justify-center h-screen'>
    <h1 className='text-4xl font-bold mb-8'>TO DO App</h1>

      <div className='flex flex-col overflow-auto items-center justify-start h-100 w-200 bg-green-300 p-4 rounded-lg shadow-md m-2 text-red-200'>

        
      {Taskdata.map((task,index) =>(
        <div key={task.Title} className='flex w-[80%] flex-col  bg-green-100 p-4 rounded-lg shadow-md items-center justify-around m-2'>
          {/* <h2 className='text-xl font-bold mb-2'>{task.Title}</h2> */}
          <TaskListWithFlexBox Title={task.Title} Des={task.Task} />
          <div className="flex gap-4 mt-2">

          <button 
            className='bg-blue-500 text-white px-4 py-1  rounded-lg shadow-md hover:bg-blue-600 transition duration-300'
            onClick={() => navigate('/task/update',{state: {task}})}>
            Update Task
          </button>
          <button 
          onClick={() => onDeleteTaskClicked( task._id)}
          className='bg-red-500 text-white px-4 py-1  rounded-lg shadow-md hover:bg-red-600 transition duration-300'
          >
            Delete task
          </button>
            </div>
        </div>
      ))}
          
    
        </div> 
        
        <label className='text-2xl' htmlFor="titleInput">Title</label>
        <input
                id='titleInput' 
               className='h-10 w-100  border-solid border-2 rounded-lg lue-500 p-2 m-2 focus:border-2 focus:border-teal-300  focus:outline-none focus:ring-0 text-white' 
               type="text" 
                
               onChange={(e)=>setTitle(e.target.value)} />
        <label className='text-2xl' htmlFor="taskInput">Task</label>
        <input
              id='taskInput' 
              className='h-10 w-100 border-solid border-2 rounded-lg lue-500 p-2 m-2 focus:border-2 focus:border-teal-300 focus:outline-none focus:ring-0 text-white' 
               type="text"
               onChange={(e)=>setTaskList(e.target.value)} />
 
        <button
         className='bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300'
         onClick={() => {
          
          onAddTaskclicked(Title, taskList ,user)
          }}>
          add task
        </button>
        
      </div>
    </>

  )
}


