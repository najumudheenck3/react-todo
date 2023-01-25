import React, { useState } from 'react'

const AddTask = ({addTask}) => {
    const [value,setValue]=useState('')
    const addItem=()=>{
        if(value){
            addTask(value)
        }
        setValue('')
    }
  return (
    <>
    <div className='task-container'>
        <input type='text' value={value} onChange={(e)=>{setValue(e.target.value)}} className='input' placeholder='✏️ New Task'/>
        <button onClick={addItem} className='add-button'>Add</button>
    </div>
    </>
  )
}

export default AddTask