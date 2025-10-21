import { createContext, useState } from "react";

const Context = createContext()

export function ContextProvider({children}){
    const [tasks, setTasks] = useState([])
    const [toUpdateId, setToUpdateId] = useState(null)

    function updateTasks({e, task}){
        e.preventDefault()
        const taskValue = task.current.value.trim()
        if (!taskValue) return
        
        if (toUpdateId){
            setTasks(tasks.map(t=>toUpdateId===t.id?{...t, task: taskValue}:t))
            setToUpdateId(null)
        } else{
            setTasks([...tasks, {id:Date.now(), task: taskValue, state:'In progress'}])
        }
        task.current.value = ''
    }

    function toggleTask(id){
        setTasks(tasks.map(t=>t.id===id?{...t, state:t.state==='Done'?'In progress':'Done'}:t))
    }

    function removeTask(id){
        if(confirm('Are you sure you want to remove this task?')){
            setTasks(tasks.filter(t=>t.id!==id))

        }
    }

    function setToModify(id){
        setToUpdateId(id)
    }

    return(
        <Context.Provider value={{tasks, toUpdateId, updateTasks, toggleTask, removeTask, setToModify}}>
            {children}
        </Context.Provider>
    )
}

export default Context