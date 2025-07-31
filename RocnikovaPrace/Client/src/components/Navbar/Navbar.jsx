import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import './Navbar.css'
import main_logo from '../../assets/slapshot_logo_transparent.png'
import search_icon from '../../assets/search-icon.svg'
import cart_icon from '../../assets/shopping-cart.svg'
import profile_icon from '../../assets/profile-pic.svg'
import menu_icon from '../../assets/menu-icon.svg';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { user, setUser, setShowUserLogin, setSearchQuery, searchQuery, getCartCount } = useAppContext();
    const navigate = useNavigate();
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    const logout = async () => {
        setUser(null);
        navigate('/')
    }


    return (
        <nav className="navbar">

            <NavLink to='/' onClick={() => setOpen(false)}>
                <img className="navbar_logo" src={main_logo} alt="logo" />
            </NavLink>

            {/* Desktop Menu */}
            <div className="navbar_desktop">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>All Products</NavLink>
                <NavLink to='/products/worldchampionship'>World Championship</NavLink>
                <NavLink to='/products/nhl'>NHL</NavLink>
                <NavLink to='/products/extraliga'>Extraliga</NavLink>
                <NavLink to='/products/accesories'>Accesories</NavLink>

                <div className="navbar_desktop_searchbar">
                    <input value={searchQuery} onChange={(e) => {
                            const value = e.target.value;
                            setSearchQuery(value);

                            if (value.trim().length > 0) {
                                navigate('/search'); 
                            }
                        }}
                        className="navbar_desktop_searchbar_input" type="text" placeholder="Search products"/>
                    <img src={search_icon} alt="search" className='navbar_desktop_searchbar_icon' />
                </div>

                <div onClick={() => navigate("/cart")} className="navbar_desktop_cart">
                    <img src={cart_icon} alt="cart" className='navbar_desktop_cart_icon' />
                    <button className="navbar_desktop_cart_button">{getCartCount()}</button>
                </div>

                {!user ? (<button onClick={() => setShowUserLogin(true)} className="user_button">
                    Login
                </button>
                ) : (
                    <div className='user_button_logged'>
                        <img src={profile_icon} className='user_icon' alt="profile" />
                        <ul className='user_logged_list'>
                            <li onClick={() => navigate("my-orders")} className='user_logged_list_choices'>My Orders</li>
                            <li onClick={logout} className='user_logged_list_choices'>Logout</li>
                        </ul>
                    </div>
                )}
            </div>

            <div className='flex items-center gap-6 sm:hidden'>
                <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
                    <img src={cart_icon} alt="cart" className='w-8 opacity-80' />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{getCartCount()}</button>
                </div>
                <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu">
                    {/* Menu Icon SVG */}
                    <img src={menu_icon} alt="menu" className='w-7 h-7' />
                </button>
            </div>


            {/* Mobile Menu */}
            {open && (
                <div ref={menuRef} className={`${open ? 'flex' : 'hidden'} navbar_mobile`}>
                    <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink to="/products" onClick={() => setOpen(false)}>All Products</NavLink>
                    <NavLink to="/products/worldchampionship" onClick={() => setOpen(false)}>Worlds Championship</NavLink>
                    <NavLink to="/products/nhl" onClick={() => setOpen(false)}>NHL</NavLink>
                    <NavLink to="/products/extraliga" onClick={() => setOpen(false)}>Extraliga</NavLink>
                    <NavLink to="/products/accesories" onClick={() => setOpen(false)}>Accesories</NavLink>
                    {user &&
                        <NavLink to="/products" onClick={() => setOpen(false)}>My Orders</NavLink>
                    }

                    {!user ? (
                        <button onClick={() => { setOpen(false); setShowUserLogin(true); }} className="navbar_mobile_login">
                            Login
                        </button>
                    ) : (
                        <button onClick={logout} className="navbar_mobile_logout">
                            Logout
                        </button>)}

                </div>
            )}

        </nav>
    )
}

export default Navbar
