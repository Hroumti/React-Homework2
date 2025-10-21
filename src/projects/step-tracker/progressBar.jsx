import { useContext } from "react";
import Context from "./context";

export default function ProgressBar(){
    const {steps} = useContext(Context)

    return(
        <div className="progress-div">
            <p>Goal: 10,000 steps</p>
            <div className="progress-container">
                <div className="progress-fill" style={{width: `${Math.min((steps/10000)*100, 100)}%`}}></div>
            </div>
        </div>
    )
}