import Form from "./form";
import Render from "./render";
import ProgressBar from "./progressBar";
import { ContetProvider } from "./context";
import './style.css'

export default function Main(){
    return(
        <ContetProvider>
            <Form/>
            <Render/>
            <ProgressBar/>
        </ContetProvider>
    )
}