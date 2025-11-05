import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "./context";

export default function Cart() {
    const { state, handleIncrement, handleRemoveFromCart } = useContext(Context);

    const subtotal = state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 5;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    return (
        <div className="cart-page">
            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-brand">
                    <Link to="/">🛍️ Shop</Link>
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/cart">
                        Cart ({state.totalItems})
                    </Link>
                </div>
            </nav>

            <div className="cart-container">
                {/* Left side - Products Grid */}
                <div className="cart-items">
                    <h2>Shopping Cart</h2>
                    {state.totalItems === 0 ? (
                        <div className="empty-cart">
                            <p>Your cart is empty</p>
                            <Link to="/" className="continue-btn">Continue Shopping</Link>
                        </div>
                    ) : (
                        <div className="cart-grid">
                            {state.cart.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="item-image">{item.image}</div>
                                    <div className="item-details">
                                        <h3>{item.name}</h3>
                                        <p className="item-category">{item.category}</p>
                                        <div className="item-price">${item.price}</div>
                                    </div>
                                    <div className="item-controls">
                                        <div className="quantity-controls">
                                            <button 
                                                className="qty-btn" 
                                                onClick={() => handleIncrement({id: item.id, step: -1})}
                                            >
                                                -
                                            </button>
                                            <span className="quantity">{item.quantity}</span>
                                            <button 
                                                className="qty-btn" 
                                                onClick={() => handleIncrement({id: item.id, step: 1})}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className="item-total">${(item.price * item.quantity).toFixed(2)}</div>
                                        <button 
                                            className="remove-btn" 
                                            onClick={() => handleRemoveFromCart(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right side - Total and Checkout */}
                <div className="cart-summary">
                    <div className="summary-card">
                        <h3>Order Summary</h3>
                        <div className="summary-line">
                            <span>Subtotal ({state.totalItems} items):</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-line">
                            <span>Shipping:</span>
                            <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                        </div>
                        <div className="summary-line">
                            <span>Tax:</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <hr />
                        <div className="summary-line total">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        
                        {state.totalItems > 0 && (
                            <Link to="/confirm" className="checkout-btn">
                                Proceed to Checkout
                            </Link>
                        )}
                        
                        <Link to="/" className="continue-shopping">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}