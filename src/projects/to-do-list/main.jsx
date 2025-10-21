import Form from "./form";
import Render from "./render";
import { ContextProvider } from "./context";
import './style.css'

export default function Main(){
    return(
        <ContextProvider>
            <Form/>
            <Render/>
        </ContextProvider>
    )
}