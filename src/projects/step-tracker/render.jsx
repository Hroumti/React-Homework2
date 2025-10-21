import { useContext } from "react";
import Context from "./context";

export default function Render(){
    const {stats} = useContext(Context)

    return(
        <>
        {stats?
        (<div className="stats-container">
            <div className="stat-container">
                Distance: {stats.distance.toFixed(2)} km
            </div>
            <div className="stat-container">
                Calories burnt: {stats.calories.toFixed(2)} kcal
            </div>
            <div className="stat-container">
                Duration: {stats.duration.toFixed(2)} min
            </div>
            <div className="stat-container">
                Level of activity: {stats.active}
            </div>
        </div>):(
            <h2>Can't generate stats</h2>
        )

    }
        </>
    )
}