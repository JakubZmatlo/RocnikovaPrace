import { useEffect, useState, createContext, useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { categories } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const queryParam = searchQuery?.length > 0 ? `?search=${searchQuery}` : "";
        const finalUrl = `http://localhost:4000/products${queryParam}`;
        const res = await fetch(finalUrl);
        const data = await res.json();
        setProducts(data.payload || []);
      } catch (err) {
        console.error("Chyba při načítání produktů:", err);
      }
    };

    fetchProducts();
  }, [searchQuery]);

  useEffect(() => {
    const fetchUserAndCart = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await fetch("http://localhost:4000/userinfo", {
            headers: {
              "auth-token": token,
            },
          });
          const data = await res.json();
          if (data.user) {
            setUser(data.user);

            const cartRes = await fetch("http://localhost:4000/getcart", {
              headers: { "auth-token": token },
            });
            const cartData = await cartRes.json();
            if (cartData.success) {
              setCartItems(cartData.cartData);
            }
          } else {
            setUser(null);
            localStorage.removeItem("token");
          }
        } catch (err) {
          console.error("Chyba při načítání uživatele:", err);
          setUser(null);
          localStorage.removeItem("token");
        }
      } else {
        const localCart = localStorage.getItem("cart");
        if (localCart) {
          setCartItems(JSON.parse(localCart));
        }
      }
    };

    fetchUserAndCart();
  }, [user]);

  useEffect(() => {
    const saveCart = async () => {
      const token = localStorage.getItem("token");
      if (token && user?.email) {
        try {
          await fetch("http://localhost:4000/updatecart", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token": token,
            },
            body: JSON.stringify({ cartData: cartItems }), 
            
          });
        } catch (error) {
          console.error("Chyba při ukládání cartu:", error);
        }
      } else {
        localStorage.setItem("cart", JSON.stringify(cartItems));
      }
    };
  
    saveCart();
  }, [cartItems, user]);

  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = (cartData[itemId] || 0) + 1;
    setCartItems(cartData);
    toast.success("Added to Cart");
  };

  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart Updated");
  };

  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      delete cartData[itemId];
      toast.success("Removed from Cart");
      setCartItems(cartData);
    }
  };

  const changeCartQuantity = (itemId, newQuantity) => {
    let cartData = structuredClone(cartItems);
    if (newQuantity <= 0) {
      delete cartData[itemId];
      toast.success("Removed from Cart");
    } else {
      cartData[itemId] = newQuantity;
      toast.success("Cart Updated");
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    if (!cartItems || typeof cartItems !== "object") return 0;
    return Object.values(cartItems).reduce((sum, quantity) => sum + quantity, 0);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const product = products.find((product) => product._id === itemId);
      if (product && cartItems[itemId] > 0) {
        totalAmount += product.price * cartItems[itemId];
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setCartItems({});
    toast.success("Logged Out");
    navigate("/");
  };

  const value = {
    navigate,
    user,
    setUser,
    showUserLogin,
    setShowUserLogin,
    cartItems,
    addToCart,
    updateCartItem,
    removeFromCart,
    changeCartQuantity,
    getCartCount,
    getCartAmount,
    searchQuery,
    setSearchQuery,
    products,
    categories,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};