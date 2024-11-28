import React, { useRef } from 'react'
import './style/TaskGroup.css'
import { useEffect } from 'react';

export default function TaskGroup({tasks,handleCheckedBoxChange,removeTask,updateTask}) {
    console.log(tasks)

  return (
    <div className='task-warpper'>
        {tasks.map((task,index)=>(
            <>
            <div className='task' key={task.id} style={{display:'flex',background:index%2===0?'#FFFFFF':'#F5F5F5',maxHeight: "200px",overflowY:'auto'}}>
                <span className='task-text'>{index + 1}. </span>
                <h3 className='task-text' style={{textDecoration:task.completed?'line-through':'none', transition:'all '}}>{task.text}</h3>
                <input className='checked-button' type="checkbox" checked={task.completed} onChange={()=>handleCheckedBoxChange(task.id)}/>
                <i className="fa-solid fa-pencil update-button" onClick={()=>updateTask(task.id)}></i>
                <i className="fa-solid fa-trash remove-button" onClick={()=>removeTask(task.id)}></i>
            </div>
            </>
        ))}
    </div>
  )
}
