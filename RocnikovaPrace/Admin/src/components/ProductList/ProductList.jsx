import React, { useState, useEffect } from 'react'
import './ProductList.css'
import delete_icon from '../../assets/delete-icon.svg'

const ProductList = () => {

    const [allProducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allproducts')
            .then((res) => res.json())
            .then((data) => { setAllProducts(data) });
    }

    useEffect(() => {
        fetchInfo();
    }, [])

    const remove_product = async (id)=> {
        await fetch('http://localhost:4000/removeproduct',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo();
    }

    return (
        <>
            <div className='product-list'>
                <h1>
                    List  of all products
                </h1>
                <div className='product-list-format-main'>
                    <p>Products</p>
                    <p>Name</p>
                    <p>Price</p>
                    <p>Category</p>
                    <p>Remove</p>
                </div>
                <div className='product-list-all-products'>
                    <hr />
                    {allProducts.map((product, index) => {
                        return <>
                            <div key={index} className='product-list-format-main product-list-format'>
                                <img className='product-list-product-image' src={product.image} alt="" />
                                <p>{product.name}</p>
                                <p>${product.price}</p>
                                <p>{product.category}</p>
                                <img onClick={()=>{remove_product(product.id)}} className='remove-icon' src={delete_icon} alt="" />
                            </div>
                            <hr />
                        </>
                    })}
                </div>
            </div>
        </>
    )
}

export default ProductList
