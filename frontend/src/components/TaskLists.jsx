import React from 'react'

const TaskLists = (Task, Title, TaskDescription) => {
    
  return (
      <table className='flex h-100 w-full '>
      <thead className='flex flex-col w-1/2'>
      <tr className='flex w-full  border-gray-300'>
        <th className=' '> Title</th>
      </tr>
      
       {
            Task.map((task, index) => (
              <tr key={index} className='flex w-full bg-amber-950 border-gray-300'>
                <th className='w-full bg-amber-600 p-2 '>{task.Title} dsfsdf</th>
              </tr>
            ))
          }
      </thead>
      <tbody className='flex flex-col w-1/2'>

        <tr className='flex flex-row w-full  border-gray-300'>
        <th> Task</th>
      </tr>
        
      {
            Task.map((task, index) => (
              <tr key={index} className='flex flex-row w-full  border-gray-300'>

                <td className='w-1/2 p-2  '>{task.Task}
                <button 
                className={`bg-red-500 text-white bold px-4 py-1 h-[30px] rounded-lg shadow-md hover:bg-red-600 transition duration-300 ${Task.length===1 && Task[0].Title === "" && Task[0].Task.length === 0? `visibility: hidden`:`visibility: visible`} `}
                onClick={()=>removeItem(task.Title)}
                >
                 Delete
                </button>

                <button 
                className={`bg-green-500 text-white bold px-4 py-1 h-[30px] rounded-lg shadow-md hover:bg-green-600 transition duration-300 ${Task.length===1 && Task[0].Title === "" && Task[0].Task.length === 0? `visibility: hidden`:`visibility: visible`} `}
                onClick={()=>handleNavigate()}
                >
                     update
                </button>

                </td>
              </tr>
            ))
          }
      </tbody>
      </table>
                
  )
}

export default TaskLists