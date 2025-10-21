import { createContext, useState } from "react";

const Context = createContext()

export function ContetProvider({children}){
    const [steps, setSteps] = useState(null)
    const [stats, setStats] = useState(null)

    function handleSubmit(stepInput){
        const stepsValue = parseInt(stepInput)
        setSteps(stepsValue)
        calcStats(stepsValue)
    }

    function calcStats(stepsValue){
        if(stepsValue>0){
            setStats( {
                distance: stepsValue * 0.00076,
                calories: stepsValue * 0.04,
                duration: stepsValue/100,
                active: (stepsValue >= 12500) ? 'Highly Active' :
                        (stepsValue >= 10000) ? 'Active' :
                        (stepsValue >= 7500)  ? 'Somewhat Active' :
                        (stepsValue >= 5000)  ? 'Low Active' :
                                        'Sedentary'
            })
        } else{
            alert('Enter the number of steps taken first!!!')
        }
    }



    return(
        <Context.Provider value={{steps, stats, handleSubmit, calcStats}}>
            {children}
        </Context.Provider>
    )
}
export default Context