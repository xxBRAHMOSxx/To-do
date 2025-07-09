
const TaskListWithFlexBox = ({Title,Des}) => {
  return (    
         <div className='flex flex-col text-l font-bold mb-4 text-teal-500 items-center gap-5 justify-between'>
            Title : {Title} 
            <div className="text-sm">Description : {Des}</div>
          
         </div>
  )
}

export default TaskListWithFlexBox