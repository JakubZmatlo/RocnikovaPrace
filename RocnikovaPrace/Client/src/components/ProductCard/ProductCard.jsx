import React from "react";
import { useAppContext } from "../../context/AppContext";
import cart_icon from '../../assets/shopping-cart.svg'
import './ProductCard.css'

const ProductCard = ({ product }) => {
    const { currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext()



    return product && (
        <div
            onClick={() => {
                navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
                scrollTo(0, 0);
            }}
            className="product-card"
        >
            <div className="group cursor-pointer flex items-center justify-center">
                <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                />
            </div>
            <div>
                <p className="product-category">{product.category}</p>
                <p className="product-name">{product.name}</p>

                <div className="product-bottom">
                    <p className="product-price">
                        {currency}${product.price}
                    </p>

                    <div onClick={(e) => e.stopPropagation()} className="text-primary">
                        {!cartItems[product.id] ? (
                            <button
                                className="product-add-btn"
                                onClick={() => addToCart(product._id)}
                            >
                                <img src={cart_icon} alt="cart-icon" className="w-4 h-4" />
                                Add
                            </button>
                        ) : (
                            <div className="product-qty-controls">
                                <button onClick={() => removeFromCart(product._id)}>-</button>
                                <span>{cartItems[product._id]}</span>
                                <button onClick={() => addToCart(product._id)}>+</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;