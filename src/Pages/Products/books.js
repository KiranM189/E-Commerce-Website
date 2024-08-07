import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './books.css'
import Item from '../../Components/Item/Item';
import science from '../../Assets/science';
import travel from '../../Assets/travel';
import business from '../../Assets/business';
import fiction from '../../Assets/fiction';
import Footer from '../../Components/Footer/Footer'
import books3_banner from '../../Assets/books3_banner.jpeg';
import books5_banner from '../../Assets/books5_banner.jpeg';
import books4_banner from '../../Assets/books4_banner.jpg';
import books7_banner from '../../Assets/books7_banner.jpg';

const Book = ()=> {
  return (
    <div >
        <Navbar />
        <div className ="travel">
          <h1>
            Travel
          </h1>
          <img className='banners' src={books5_banner} alt="" />
          <hr/>
          <div className = "collections">
          {travel.map((item, i) => (
                  <Item
                    key={i}
                    id={item.id}
                    name={item.name}  
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
              ))}
        
          </div>
          
        </div>
    
        <div className = 'fiction'>
            <h1>
              Fiction
            </h1>
            <img className='banners' src={books3_banner} alt="" />
            <hr/>
            <div className = "collections">
            {fiction.map((item, i) => (
                  <Item
                    key={i}
                    id={item.id}
                    name={item.name}  
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
              ))}
          </div>


        </div>
        <div className='science'>
        <h1>
              Science
            </h1>
            <img className='banners' src={books7_banner} alt="" />
            <hr/>
            <div className = "collections">
            {science.map((item, i) => (
                  <Item
                    key={i}
                    id={item.id}
                    name={item.name}  
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
              ))}
            </div>
    </div>
    <div className='business'>
        <h1>
              Business
            </h1>
            <img className='banners' src={books4_banner} alt="" />
            <hr/>
            <div className = "collections">
            {business.map((item, i) => (
                  <Item
                    key={i}
                    id={item.id}
                    name={item.name}  
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
              ))}
            </div>
    </div>
    <Footer/>
    </div>
   ) ;
  
}

export default Book
