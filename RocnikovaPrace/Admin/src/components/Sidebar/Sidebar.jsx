import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import cart_icon from '../../assets/shopping-cart.svg'
import list_icon from '../../assets/list-icon.svg'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link to={'/addproduct'} style={{ textDecoration: "none" }}>
                <div className='sidebar-item'>
                    <img src={cart_icon} alt="" className='cart-icon' />
                    <p>
                        Add product
                    </p>
                </div>
            </Link>
            <Link to={'/productlist'} style={{ textDecoration: "none" }}>
                <div className='sidebar-item'>
                    <img src={list_icon} alt="" className='list-icon' />
                    <p>
                        List of products
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar
