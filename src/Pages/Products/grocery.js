import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import './grocery.css';
import Item from '../../Components/Item/Item';
import grocery from '../../Assets/g_01';
import grocery3_banner from '../../Assets/grocery3_banner.jpg';
const Grocery = () => {
  return (
    <div>
        <Navbar/>
        <div className ="grocery">
          <h1>
            Today's deals
          </h1>
          <img className='banners' src={grocery3_banner} alt="" />
          <hr/>
          <div className = "collections">
            {grocery.map((item,i)=>
            {
              return <Item key = {i} id = {grocery.id} name = {item.name} image ={item.image} new_price = {item.new_price} old_price ={item.old_price}/>
            })}
          </div>
          
        </div>
    
      
    </div>
  )
}

export default Grocery;
