import { useContext } from "react";
import Context from "./context";

export default function Cart(){
    const {state, handleIncrement, handleRemoveFromCart} = useContext(Context)

    return(
        <div className="cart-container">
            <h2 style={{display:state.totalItems===0?'block':'hidden'}}>{state.totalItems===0?'No items found':''}</h2>
            <table className="cart-table">
                <tbody>
                    {state.cart && state.cart && state.cart.map(item=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>
                                <button className="quantity-btn" onClick={()=>handleIncrement({id:item.id, step:-1})}>-</button>
                                {item.quantity}
                                <button className="quantity-btn" onClick={()=>handleIncrement({id:item.id, step:1})}>+</button>
                            </td>
                            <td>
                                <button className="remove-btn" onClick={()=>handleRemoveFromCart(item.id)}>Remove</button>
                            </td>
                        </tr>
                    )                     
                    )}
                </tbody>
            </table>
            <span className="total" style={{display:state.totalItems===0?'hidden':'block'}}>Total: ${state && state.cart ? state.cart.reduce((acc, item)=>acc+(item.price*item.quantity), 0):0}</span>
        </div>
    )
}