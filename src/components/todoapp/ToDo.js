import React, { useEffect, useState } from 'react'
import './ToDo.css'
import AddTask from './AddTask'
import TaskList from './TaskList'

const ToDo = () => {
    const [tasks,setTasks]=useState([])
    useEffect(()=>{
        document.title=`You have ${tasks.length} pending tasks`
    })
    const addTask=(title)=>{
        const newOne=[...tasks,{title}]
        setTasks(newOne)
    }
    const removeTask=(index)=>{
        const newOne=[...tasks]
        newOne.splice(index,1)
        setTasks(newOne)
    }
  return (
<>
<div className='container-todo'>
    <div className='header'>ToDo App</div>
    <h1>{`${new Date().toLocaleString()}`}</h1>
    <div className='add-task'><AddTask addTask={addTask}/></div>
    <div className='tasks'>
        {tasks.map((task,index)=>(
        <TaskList task={task} removeTask={removeTask} index={index} key={index}/>
        ))}
        
       </div>

</div>
</>
    )
}

export default ToDo