import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "./context";

export default function Confirm() {
    const { state } = useContext(Context);
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [location, setLocation] = useState("");
    const [cardDetails, setCardDetails] = useState({
        number: "",
        expiry: "",
        cvv: "",
        name: ""
    });

    const subtotal = state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 5;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    const handleCardChange = (field, value) => {
        setCardDetails(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleConfirmOrder = () => {
        if (!location.trim()) {
            alert("Please enter your delivery location");
            return;
        }
        
        if (paymentMethod === "card") {
            if (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv || !cardDetails.name) {
                alert("Please fill in all card details");
                return;
            }
        }

        alert(`Order confirmed! Total: $${total.toFixed(2)}. Payment: ${paymentMethod}. Delivery to: ${location}`);
    };

    return (
        <div className="confirm-page">
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

            <div className="confirm-container">
                {/* Left side - Smaller Product Grid */}
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <div className="mini-cart">
                        {state.cart.map(item => (
                            <div key={item.id} className="mini-item">
                                <div className="mini-image">{item.image}</div>
                                <div className="mini-details">
                                    <h4>{item.name}</h4>
                                    <p>{item.quantity} × ${item.price}</p>
                                    <span className="mini-total">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="order-totals">
                        <div className="total-row">
                            <span>Subtotal:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="total-row">
                            <span>Shipping:</span>
                            <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                        </div>
                        <div className="total-row">
                            <span>Tax:</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <hr />
                        <div className="total-row final">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* Right side - Payment Confirmation */}
                <div className="payment-section">
                    <div className="payment-form">
                        <h2>Payment & Delivery</h2>
                        
                        {/* Delivery Location */}
                        <div className="form-group">
                            <h3>📍 Delivery Location</h3>
                            <textarea
                                placeholder="Enter your full delivery address..."
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="location-textarea"
                                rows="3"
                            />
                        </div>

                        {/* Payment Method Selection */}
                        <div className="form-group">
                            <h3>💳 Payment Method</h3>
                            <div className="payment-options">
                                <label className="payment-option">
                                    <input
                                        type="radio"
                                        value="card"
                                        checked={paymentMethod === "card"}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <span>💳 Credit/Debit Card</span>
                                </label>
                                <label className="payment-option">
                                    <input
                                        type="radio"
                                        value="cash"
                                        checked={paymentMethod === "cash"}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <span>💵 Cash on Delivery</span>
                                </label>
                            </div>
                        </div>

                        {/* Card Details */}
                        {paymentMethod === "card" && (
                            <div className="form-group">
                                <h3>Card Details</h3>
                                <div className="card-inputs">
                                    <input
                                        type="text"
                                        placeholder="Card Number"
                                        value={cardDetails.number}
                                        onChange={(e) => handleCardChange("number", e.target.value)}
                                        className="card-input"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Cardholder Name"
                                        value={cardDetails.name}
                                        onChange={(e) => handleCardChange("name", e.target.value)}
                                        className="card-input"
                                    />
                                    <div className="card-row">
                                        <input
                                            type="text"
                                            placeholder="MM/YY"
                                            value={cardDetails.expiry}
                                            onChange={(e) => handleCardChange("expiry", e.target.value)}
                                            className="card-input small"
                                        />
                                        <input
                                            type="text"
                                            placeholder="CVV"
                                            value={cardDetails.cvv}
                                            onChange={(e) => handleCardChange("cvv", e.target.value)}
                                            className="card-input small"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Cash on Delivery Info */}
                        {paymentMethod === "cash" && (
                            <div className="form-group">
                                <div className="cash-info">
                                    <p>💵 Cash on Delivery Selected</p>
                                    <p>Please have exact amount ready: <strong>${total.toFixed(2)}</strong></p>
                                </div>
                            </div>
                        )}

                        {/* Confirm Button */}
                        <button 
                            className="confirm-btn"
                            onClick={handleConfirmOrder}
                        >
                            Confirm Order - ${total.toFixed(2)}
                        </button>

                        <Link to="/cart" className="back-link">
                            ← Back to Cart
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}