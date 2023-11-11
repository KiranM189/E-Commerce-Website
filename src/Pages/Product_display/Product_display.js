import React from 'react'
import Product_display_element from './Product_display_element';
import all_products from '../../Assets/all_products.js';
import { useParams } from 'react-router-dom';

const Product_display = () => {
  const {productId} = useParams();
  const product = all_products.find((item) => item.id === Number(productId));
  console.log(productId);
  return (
      <div>
          <Product_display_element product={product}/>
      </div>
  )
}


export default Product_display;
