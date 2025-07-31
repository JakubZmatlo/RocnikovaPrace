import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {categories} from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [cartItems, setCartItems] = useState({});
    const [searchQuery, setSearchQuery] = useState("");
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
          const res = await fetch("http://localhost:4000/products");
          const data = await res.json();
          setProducts(data.payload || []); // důležité
        } catch (err) {
          console.error("Chyba při načítání produktů:", err);
          setProducts([]); // fallback
        }
      };

      useEffect(() => {
        const fetchProducts = async () => {
          try {
            const queryParam = searchQuery?.length > 0 ? `?search=${searchQuery}` : "";
            const finalUrl = `http://localhost:4000/products${queryParam}`;
            console.log("FETCHING:", finalUrl); // 👈 debug
      
            const res = await fetch(finalUrl);
            const data = await res.json();
            if (data.payload) {
              setProducts(data.payload);
            } else {
              setProducts([]);
            }
          } catch (err) {
            console.error("Chyba při načítání produktů:", err);
          }
        };
      
        fetchProducts();
      }, [searchQuery]);

    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        } 
        setCartItems(cartData);
        toast.success("Added to Cart")
    }

    const updateCartItem = (itemId, quantity)=> {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData)
        toast.success("Cart Updated")
    }

    const removeFromCart = (itemId) => {
      let cartData = structuredClone(cartItems);
      if (cartData[itemId]) {
          delete cartData[itemId];
          toast.success("Removed from Cart");
          setCartItems(cartData);
      }
  };

    const getCartCount = ()=>{
        let totalCount = 0;
        for(const item in cartItems){
            totalCount += cartItems[item];
        }
        return totalCount;
    }

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

    const value = { navigate, user, setUser, showUserLogin, setShowUserLogin, cartItems, 
        addToCart, updateCartItem, removeFromCart, searchQuery, setSearchQuery, getCartCount, getCartAmount, products, categories, changeCartQuantity}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
} 