import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import arrow_icon from '../../assets/right-arrow.svg';
import delete_icon from '../../assets/delete-icon.svg';
import './Cart.css';

const Cart = () => {
    const {
        products,
        cartItems,
        removeFromCart,
        updateCartItem,
        getCartCount,
        getCartAmount,
        navigate,
    } = useAppContext();

    const [cartArray, setCartArray] = useState([]);
    const [paymentOption, setPaymentOption] = useState("COD");

    const getCart = () => {
        const tempArray = [];
        for (const key in cartItems) {
            const product = products.find(p => p._id === key);
            if (product) {
                tempArray.push({ ...product, quantity: cartItems[key] });
            }
        }
        setCartArray(tempArray);
    };

    useEffect(() => {
        if (products.length > 0 && cartItems) {
            getCart();
        }
    }, [products, cartItems]);

    return products.length > 0 && cartItems ? (
        <div className="cart-container">

            <div className='cart-main'>
                <h1 className="cart-title">
                    Shopping Cart <span className="cart-count">{getCartCount()} Items</span>
                </h1>

                <div className="cart-header">
                    <p className="cart-header-product">Product</p>
                    <p className="cart-header-total">Total</p>
                    <p className="cart-header-action">Remove</p>
                </div>

                {cartArray.map((product, index) => (
                    <div key={index} className="cart-item">

                        <div className="cart-product-info">
                            <div
                                onClick={() => {
                                    navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
                                    scrollTo(0, 0);
                                }}
                                className="cart-product-image-wrapper"
                            >
                                <img className="cart-product-image" src={product.image} alt={product.name} />
                            </div>
                            <div className="cart-product-details">
                                <p className="cart-product-name">{product.name}</p>
                                <div className="cart-quantity-wrapper">
                                    <label htmlFor={`qty-${index}`} className="cart-qty-label">Qty:</label>
                                    <select
                                        id={`qty-${index}`}
                                        value={product.quantity}
                                        onChange={(e) => updateCartItem(product._id, parseInt(e.target.value))}
                                        className="cart-qty-select"
                                    >
                                        {Array(product.quantity > 9 ? product.quantity : 9).fill('').map((_, i) => (
                                            <option key={i} value={i + 1}>{i + 1}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <p className="cart-product-total">
                            ${product.price * product.quantity}
                        </p>

                        <button onClick={() => removeFromCart(product._id)} className="cart-delete-button">
                            <img src={delete_icon} alt="delete" className="cart-delete-icon" />
                        </button>
                    </div>
                ))}

                <button
                    onClick={() => {
                        navigate("/products");
                        scrollTo(0, 0);
                    }}
                    className="cart-continue-shopping"
                >
                    <img className="cart-arrow-icon" src={arrow_icon} alt="arrow" />
                    Continue Shopping
                </button>
            </div>

            <div className="cart-order-summary">
                <h2 className="cart-order-title">Order Summary</h2>
                <hr className="cart-order-divider" />

                <div className="cart-payment-section">
                    <p className="cart-payment-label">Payment Method</p>
                    <select
                        onChange={(e) => setPaymentOption(e.target.value)}
                        className="cart-payment-select"
                    >
                        <option value="COD">Cash On Delivery</option>
                        <option value="Online">Online Payment</option>
                    </select>
                </div>

                <hr className="cart-order-divider" />

                <div className="cart-amount-summary">
                    <p className="cart-amount-line">
                        <span>Price:</span>
                        <span>${getCartAmount()}</span>
                    </p>
                    <p className="cart-amount-line total">
                        <span>Total Amount:</span>
                        <span>${getCartAmount()}</span>
                    </p>
                </div>

                <button
                    onClick={() => { }}
                    className="cart-checkout-button"
                >
                    {paymentOption === "COD" ? "Place Order" : "Proceed to Checkout"}
                </button>
            </div>
        </div>
    ) : null;
};

export default Cart;