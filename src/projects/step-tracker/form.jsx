import { useContext, useRef } from "react";
import Context from "./context";

export default function Form(){
    const {handleSubmit} = useContext(Context)
    const stepInput = useRef(null)

    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            handleSubmit(stepInput.current.value)
            }}>
            <input type="number" min={10} step={10} ref={stepInput} placeholder="Enter the number of steps taken"/>
            <input type="submit" value="Submit" />
        </form>
    )
}