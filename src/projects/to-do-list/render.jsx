import { useContext } from "react";
import Context from "./context";

export default function Render(){
    const {tasks, setToModify, removeTask} = useContext(Context)


    return(
        <div className="tasksContainer">
            {!tasks||tasks.length===0?(<h2>No tasks found</h2>):tasks.map(t=>(
                <div className="task-container" key={t.id}>
                    <p className="task" style={{textDecoration:t.state==='Done'?'line-through':'none'}}>{t.task}</p>
                    <span className="actions">
                        <button className="edit-btn" onClick={()=>setToModify(t.id)}>✏️</button>
                        <button className="remove-btn" onClick={()=>removeTask(t.id)}>🗑️</button>
                    </span>
                </div>
            ))}
        </div>
    )
}