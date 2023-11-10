import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Clothing.css'
import Item from '../../Components/Item/Item';
import women from '../../Assets/womens';
import men from '../../Assets/mens';
import kid from '../../Assets/kids';
import mens_banner from'../../Assets/banner_mens.png';
import kid_banner from '../../Assets/banner_kids.png';
import women_banner from '../../Assets/banner_women.png';
import Footer from '../../Components/Footer/Footer'
const Clothing = () => {
  return (
    <div>
        <Navbar />
        <div className ="mens">
          <h1>
            Men's wear
          </h1>
          <img className='banners' src={mens_banner} alt="" />
          <hr/>
          <div className = "collections">
            {men.map((item,i)=>
            {
              return <Item key = {i} id = {men.id} name = {item.name} image ={item.image} new_price = {item.new_price} old_price ={item.old_price}/>
            })}
          </div>
        </div>
        <div className = 'womens'>
            <h1>
              Women's wear
            </h1>
            <img className='banners' src={women_banner} alt="" />
            <hr/>
            
            <div className = "collections">
            {women.map((item,i)=>
            {
              return <Item key = {i} id = {men.id} name = {item.name} image ={item.image} new_price = {item.new_price} old_price ={item.old_price}/>
            })}
        </div>
        </div>
        <div className='kids'>
            <h1>
              kids's wear
            </h1>
            <img className='banners' src={kid_banner} alt="" />
            <hr/>
            <div className = "collections">
            {kid.map((item,i)=>
            {
              return <Item key = {i} id = {men.id} name = {item.name} image ={item.image} new_price = {item.new_price} old_price ={item.old_price}/>
            })}
         </div>
         </div>
         <Footer/>
         </div>)
  
}

export default Clothing
