import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Electronics.css';
import Item from '../../Components/Item/Item';
import mobile from '../../Assets/mobile'; // Assuming this is an array of mobile phones
import laptop from '../../Assets/laptop'; // Assuming this is an array of laptops
import smartwatch from '../../Assets/smartwatch'; // Assuming this is an array of smartwatches
import headphone from '../../Assets/headphone'; // Assuming this is an array of headphones and speakers
import Footer from '../../Components/Footer/Footer'
import laptop_banner from '../../Assets/laptop_banner.jpg';
import phone_banner from '../../Assets/Phone_banner.jpg';
import smartwatch_banner from '../../Assets/smartwatch_banner.jpg';
import headphone_banner from '../../Assets/headphones_banner.gif';
const Electronics = () => {
  return (
    <div>
      <Navbar />
      <div className="mobile"> {/* Corrected class name */}
        <h1>Smart Phones</h1>
        
        <img className='banners'src={phone_banner} alt="" />
        <hr />

        <div className="collections">
          {mobile.map((item, i) => {
            return (
              <Item
                key={i}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>

      <div className="laptop">
        <h1>Laptops</h1>
        <img className="banners" src={laptop_banner} alt="" />
        <hr />
        <div className="collections">
          {laptop.map((item, i) => {
            return (
              <Item
                key={i}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>

      <div className="smartwatch"> 
        <h1>Smart Watches</h1>
        <img className='banners' src={smartwatch_banner} alt="" />
        <hr />
        <div className="collections">
          {smartwatch.map((item, i) => {
            return (
              <Item
                key={i}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>

      <div className="headphone">
        <h1>Speakers and Headphones</h1>
        <img className='banners' src={headphone_banner} alt="" />
        <hr />
        <div className="collections">
          {headphone.map((item, i) => {
            return (
              <Item
                key={i}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Electronics;
