import Meals from "./meals";
import Stats from "./stats";
import { ContextProvider } from "./context";
import './style.css'

export default function Main(){
    return (
        <ContextProvider>
            <Meals/>
            <Stats/>
        </ContextProvider>
    )
}