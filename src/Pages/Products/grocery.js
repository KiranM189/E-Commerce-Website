import React from 'react'
<<<<<<< HEAD
import { Navbar } from 'react-bootstrap'
import Footer from '../../Components/Footer/Footer'
=======
import Navbar from '../../Components/Navbar/Navbar';
import './grocery.css';
import Item from '../../Components/Item/Item';
import grocery from '../../Assets/g_01';
>>>>>>> 4fd692e4cb70ac28ee437987de2c8099b7e43673
const Grocery = () => {
  return (
    <div>
        <Navbar/>
<<<<<<< HEAD
          
        <Footer/>
=======
        <div className ="grocery">
          <h1>
            Today's deals
          </h1>
          <hr/>
          
          <div className = "collections">
            {grocery.map((item,i)=>
            {
              return <Item key = {i} id = {grocery.id} name = {item.name} image ={item.image} new_price = {item.new_price} old_price ={item.old_price}/>
            })}
          </div>
          
        </div>
    
>>>>>>> 4fd692e4cb70ac28ee437987de2c8099b7e43673
      
    </div>
  )
}

export default Grocery
