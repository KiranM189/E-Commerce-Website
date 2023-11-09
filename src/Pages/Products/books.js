import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './books.css'
import Item from '../../Components/Item/Item';
import science from '../../Assets/science';
import travel from '../../Assets/travel';
import business from '../../Assets/business';
import fiction from '../../Assets/fiction';

const Book = ()=> {
  return (
    <div >
        <Navbar />
        <div className ="travel">
          <h1>
            Travel
          </h1>
          <hr/>
          
          <div className = "collections">
            {travel.map((item,i)=>
            {
              return <Item key = {i} id = {travel.id} name = {item.name} image ={item.image} new_price = {item.new_price} old_price ={item.old_price}/>
            })}
          </div>
          
        </div>
    
        <div className = 'fiction'>
            <h1>
              Fiction
            </h1>
            <hr/>
            <div className = "collections">
            {fiction.map((item,i)=>
            {
              return <Item key = {i} id = {fiction.id} name = {item.name} image ={item.image} new_price = {item.new_price} old_price ={item.old_price}/>
            })}
          </div>


        </div>
        <div className='science'>
        <h1>
              Science
            </h1>
            <hr/>
            <div className = "collections">
            {science.map((item,i)=>
            {
              return <Item key = {i} id = {science.id} name = {item.name} image ={item.image} new_price = {item.new_price} old_price ={item.old_price}/>
            })}
         </div>
    </div>
    <div className='business'>
        <h1>
              Business
            </h1>
            <hr/>
            <div className = "collections">
            {business.map((item,i)=>
            {
              return <Item key = {i} id = {business.id} name = {item.name} image ={item.image} new_price = {item.new_price} old_price ={item.old_price}/>
            })}
         </div>
    </div>
    </div>
   ) ;
  
}

export default Book
