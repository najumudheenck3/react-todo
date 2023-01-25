import React from 'react'

const TaskList = ({task,index,removeTask}) => {
  return (
   <>
   <div className='task-list'>
  {task.title}
    <button  onClick={()=>{removeTask(index)}} className='task-delete-btn'>❌ Delete</button>
    </div>
    </>
  )
}

export default TaskList