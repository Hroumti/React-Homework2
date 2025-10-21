import { useContext, useEffect, useRef, useState } from "react";
import Context from './context'

export default function Form(){
    const {tasks, toUpdateId, updateTasks} = useContext(Context)
    const task = useRef(null)
    
        useEffect(()=>{
            if (!task.current) return
            if (toUpdateId){
                const toEdit = tasks.find(t=>t.id===toUpdateId)
                task.current.value = toEdit ? toEdit.task : ''
            } else {
                task.current.value = ''
            }
        }, [toUpdateId, tasks])
    
    return(
        <form id="form" onSubmit={(e)=>updateTasks({e, task})}>
            <h1>My toDoList</h1>
            <div className="form-container">
                <input type="text" id="task-input" ref={task}/>
                <input type="submit" id="submit-btn" value={toUpdateId?'Update':'Add'}/>
            </div>
        </form>
    )
}