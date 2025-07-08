import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getTasks } from '../store/taskStore'
// import InputForm from '../components/InputForm'

export default function Tasks() {
  const [Title, setTitle] = useState("")
  const [taskList, setTaskList] = useState([])
  
  const [Task, setTask] = useState([{"Title": "", "Task": []}])

  const navigate = useNavigate()
  var taskData = []

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      navigate('/login')
    }
    console.log(user);
    
    // const data = getTasks(user.userId)
    //setTitle(data[0].Title)
    //setTaskList(data[0].Task)
    fetchTasks(user.userId)
    onAddTaskclicked({Title, taskList})
      
  },[])
  
  const fetchTasks = async (userId) => {
    try {
     const data = await getTasks(userId)
      taskData = data.tasks
    setTitle(data.tasks[0].Title)
    setTaskList(data.tasks[0].Task)
    // setTask(Title, taskList)
    console.log("task data", taskData);
    
      
    } catch (error) {
      console.error("Error fetching tasks:", error);
      // Handle error appropriately, e.g., show a notification or alert
      
    }
  }

  const onAddTaskclicked = ({Title, taskList}) => {
    setTask(prev => {
      if(prev.length === 1 && prev[0].Title === "" && prev[0].Task.length === 0) {
        return [{ Title: Title, Task: taskList }]

      }
      else {return [
        ...prev,
        { Title: Title, Task: taskList }
      ]}
    })
  }

   const removeItem = (title) => {  
    setTask(prev => {
      return prev.filter(task => task.Title !== title)})
  };

  const handleNavigate = ()=>{
    navigate('/task/update',{state: { task: Task }})
  }


  return (
    // <TaskContext.Provider value={Task}>
    <>
      <div className='flex flex-col items-center justify-center h-screen'>
    <h1 className='text-4xl font-bold mb-8'>TO DO App</h1>

      <div className='flex items-top justify-start h-100 w-200 bg-gray-100 p-4 rounded-lg shadow-md overflow-y-auto m-2'>

        </div>

        {/* <InputForm/> */}

        <input className='h-10 w-100 border-solid border-2 rounded-lg lue-500 p-2 m-2' type="text" value={Title} onChange={(e)=>setTitle(e.target.value)} />
        <input className='h-10 w-100 border-solid border-2 rounded-lg lue-500 p-2 m-2' type="text" value={taskList} onChange={(e)=>setTaskList(e.target.value)} />
 
        <button
         className='bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300'
         onClick={() => {
          
          onAddTaskclicked({Title, taskList})
          }}>
          add task
        </button>
        
      </div>
    </>
    // </TaskContext.Provider>
  )
}


