import React from 'react'
import Product_display_element from './Product_display_element.js';
import all_products from '../../Assets/all_products.js';
import { useParams } from 'react-router-dom';

const Product_display = () => {
  const params = useParams();
  var productId=params.productId;
  const product = all_products.find((item) => item.id === Number(productId));
  return (
      <div>
          <Product_display_element product={product}/>
      </div>
  )
}


export default Product_display;
