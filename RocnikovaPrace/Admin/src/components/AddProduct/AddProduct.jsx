import React, {useState} from 'react'
import './AddProduct.css'
import upload_icon from '../../assets/upload-icon.svg'

const AddProduct = () => {

    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name:"",
        price:"",
        category:"nhl",
        image:""
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const changeHandler = (e) =>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const addButton = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            body:formData,
        }).then ((resp) => resp.json().then((data)=>{responseData=data}));

        if (responseData.success) {
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/products/addproduct',{
                method:'POST',
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product Added"):alert("Failed")
            })
        }
    }

    return (
        <>
            <div className='add-product'>
                <div className='add-product-itemfield'>
                    <p>
                        Product name
                    </p>
                    <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
                </div>
                    <div className='add-product-itemfield'>
                        <p>
                            Price
                        </p>
                        <input value={productDetails.price} onChange={changeHandler} type="text" name='price' placeholder='Type here' />
                    </div>
                <div className='add-product-itemfield'>
                    <p>
                        Product category
                    </p>
                    <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                        <option value="worldchampionship">World Championship</option>
                        <option value="nhl">NHL</option>
                        <option value="extraliga">Extraliga</option>
                        <option value="accesories">Accesories</option>
                    </select>
                </div>
                <div className='add-product-itemfield'>
                    <p>
                        Image
                    </p>
                    <label htmlFor="file-input">
                        <img src={image?URL.createObjectURL(image):upload_icon} className='upload-icon' alt="" />
                    </label>
                    <input onChange={imageHandler} type="file" name='image' id='file-input' hidden/>
                </div>
                <button onClick={()=>{addButton()}} className='add-product-button'>Add</button>
            </div>
        </>
    )
}

export default AddProduct
