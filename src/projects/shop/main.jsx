import { ContextProvider } from "./context";
import Home from "./home";
import Cart from "./cart";
import Confirm from "./confirm";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './style.css';

export default function Main() {
    return (
        <BrowserRouter>    
            <ContextProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/confirm" element={<Confirm />} />
                    <Route path="/*" element={<h1 className="error-404">ERROR 404. Page not found.</h1>} />
                </Routes>
            </ContextProvider>
        </BrowserRouter>
    );
}