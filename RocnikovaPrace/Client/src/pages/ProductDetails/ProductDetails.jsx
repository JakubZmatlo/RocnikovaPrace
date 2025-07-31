import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useAppContext } from "../../context/AppContext";
import "./ProductDetails.css";

const ProductDetails = () => {
    const {
        products,
        navigate,
        currency,
        addToCart,
        removeFromCart,
        cartItems,
        changeCartQuantity,
    } = useAppContext();

    const { id } = useParams();
    const [thumbnail, setThumbnail] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);

    const product = products.find((item) => item._id === id);
    const quantityInCart = cartItems[id] || 0;

    useEffect(() => {
        if (products.length > 0 && product) {
            let filtered = products.filter(
                (item) =>
                    item.category === product.category && item._id !== product._id
            );
            setRelatedProducts(filtered.slice(0, 5));
        }
    }, [products, product]);

    useEffect(() => {
        setThumbnail(product?.image ? product.image : null);
    }, [product]);

    return (
        product && (
            <div className="product-details-container">
                <p className="breadcrumbs">
                    <Link to="/">Home</Link> /
                    <Link to="/products"> Products</Link> /
                    <Link to={`/products/${product.category.toLowerCase()}`}>
                        {" "}
                        {product.category}
                    </Link>{" "}
                    /<span className="text-primary"> {product.name}</span>
                </p>

                <div className="product-content">
                    <div className="image-gallery">
                        {(Array.isArray(product.image) ? product.image : [product.image]).map(
                            (img, idx) => (
                                <img key={idx} src={img} alt={`Thumbnail ${idx + 1}`} />
                            )
                        )}
                    </div>

                    <div className="product-info">
                        <h1 className="product-title">{product.name}</h1>

                        <div className="product-price">
                            Price: {currency}${product.price}
                        </div>

                        <p className="about-title">About Product:</p>
                        <ul className="description-list">
                            {(Array.isArray(product.description)
                                ? product.description
                                : []
                            ).map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>

                        <div className="quantity-control">
                            {quantityInCart > 0 ? (
                                <>
                                    <button
                                        onClick={() =>
                                            changeCartQuantity(product._id, quantityInCart - 1)
                                        }
                                        className="quantity-btn"
                                    >
                                        -
                                    </button>
                                    <span>{quantityInCart}</span>
                                    <button
                                        onClick={() =>
                                            changeCartQuantity(product._id, quantityInCart + 1)
                                        }
                                        className="quantity-btn"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => removeFromCart(product._id)}
                                        className="remove-btn"
                                    >
                                        Remove
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => addToCart(product._id)}
                                    className="add-to-cart"
                                >
                                    Add to Cart
                                </button>
                            )}
                        </div>

                        <button
                            onClick={() => {
                                addToCart(product._id);
                                navigate("/cart");
                            }}
                            className="buy-now"
                        >
                            Buy now
                        </button>
                    </div>
                </div>

                <div className="related-section">
                    <div className="flex flex-col items-center w-max">
                        <p className="related-heading">Related Products</p>
                        <div className="underline"></div>
                    </div>

                    <div className="related-grid">
                        {relatedProducts
                            .filter((p) => p.availability)
                            .map((p, index) => (
                                <ProductCard key={index} product={p} />
                            ))}
                    </div>

                    <button
                        onClick={() => {
                            navigate("/products");
                            scrollTo(0, 0);
                        }}
                        className="see-more-btn"
                    >
                        See more
                    </button>
                </div>
            </div>
        )
    );
};

export default ProductDetails;