import { ContextProvider } from "./context";
import Render from "./render";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./navbar";
import Cart from "./cart";
import './style.css';

export default function Main(){
    return(
        <BrowserRouter>    
            <ContextProvider>
                <NavBar/>
                    <main>
                        <Routes>
                        <Route path="/" element={<Render/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/*" element={<h1 className="404">ERROR404. Page not found.</h1>}/>
                    </Routes>
                    </main>

            </ContextProvider>
        </BrowserRouter>

    )

}