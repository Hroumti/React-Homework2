import { Link } from "react-router-dom";
import Context from "./context";
import { useContext } from "react";

export default function NavBar(){
    const {state} = useContext(Context)



    return(
        <div className="navbar-container">
            <h1 className="brand"><Link to={'/'}>E-commerce</Link></h1>
            <span className="link-span">
                <Link to={'/'}>Products</Link>
                <Link to={'/cart'}>Cart <span className="total-items-count">{state.totalItems}</span></Link>
            </span>
        </div>
    )
}