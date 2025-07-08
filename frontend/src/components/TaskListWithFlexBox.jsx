import React from 'react'

const TaskListWithFlexBox = (Task, Title,TaskDescription) => {
  return (
     <ul>
              {
              Task.length === 1 && Task[0].Title === "" && Task[0].Task.length === 0 ? 
              <div className='text-l font-bold mb-4'>No tasks available</div>
              :

              taskData.map((task, index) => (
                
                <li className='text-l font-bold mb-4' key={index}>
                   Title :{task.Title}<br/>
                   Task : {task.Task} 
                </li>
              ))
            }
            </ul>
  )
}

export default TaskListWithFlexBox