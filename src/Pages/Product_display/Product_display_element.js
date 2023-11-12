import React from 'react'
import star_icon from "../../Assets/star_icon.png"
import star_dull_icon from '../../Assets/star_dull_icon.png';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Product_display_element.css'

const Product_display_element = (props) =>{
    const {product}=props;
  return (
    <div>
        <Navbar/>
    <div className='product-display'>
        <div className="left">
            <div className="main-img">
                <img src={product.image} alt="" />
            </div>
        </div>
        <div className="right">
            <h1>{product.name}</h1>
            <div className="stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>1028</p>
            </div>
            <div className="prices">
                <div className="new-prices">${product.new_price}</div>
                <div className="old-prices">${product.old_price}</div>
            </div>
            <div className="description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis architecto magnam saepe itaque. Sint, ad fuga placeat corrupti illum nemo, beatae aspernatur accusantium ipsam animi rem quis, nam libero?</div>
            <div className="size">
                <h1>Select Size</h1>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
            <button>ADD TO CART</button>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Product_display_element;
