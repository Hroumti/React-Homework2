import { createContext, useReducer } from "react";


const Context = createContext()

const initialState = {
    cart:[],
    totalItems:0
}

export function ContextProvider({children}){

    function cartReducer(state, action){
        switch(action.type){
            case('addToCart'):
                const product = action.payload
                if (state.cart.find(p=>p.id===product.id)){
                    alert('Product already in cart!!!')
                    return state
                } else{
                return {
                    cart:[...state.cart, {...product, quantity:1}],
                    totalItems: state.totalItems + 1

                }
            }
            case('incrementQuantity'):
                const productId = action.payload.id
                const step = action.payload.step
                if(state.cart.find(p=>p.id===productId).quantity+step<=0){
                    return{
                        cart:state.cart.filter(p=>p.id!==productId),
                        totalItems: state.totalItems - 1
                    }
                } else{
                    return{
                        ...state,
                        cart:state.cart.map(p=>p.id===productId?{...p, quantity: p.quantity+step}:p)
                    }
                }
            case('removeFromCart'):
                const toRemoveId = action.payload
                return{
                    cart:state.cart.filter(p=>p.id!==toRemoveId),
                    totalItems: state.totalItems - 1
                }
        }
    }

    const [state, dispatch] = useReducer(cartReducer, initialState)

    function handleAddToCart(item){
        dispatch({type:'addToCart', payload:item})
    }

    function handleIncrement({id, step}){
        dispatch({type:'incrementQuantity', payload:{id, step}})
    }

    function handleRemoveFromCart(id){
        dispatch({type:'removeFromCart', payload:id})
    }

    return(
        <Context.Provider value={{state, handleAddToCart, handleIncrement, handleRemoveFromCart}}>
            {children}
        </Context.Provider>
    )


}
export default Context