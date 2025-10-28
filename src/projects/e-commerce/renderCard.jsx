import Context from "./context";
import { useContext } from "react";

export default function RenderCard({item}){
    const {handleAddToCart} = useContext(Context)

    return(
        <div className="render-card-container">
            <h2>{item.name}</h2>
            <div className="render-card-group">
                <p>{item.category}</p>
                <p>${item.price}</p>
                <button className="add-btn" onClick={()=>handleAddToCart(item)}>Add to cart</button>
            </div>
        </div>
    )
}