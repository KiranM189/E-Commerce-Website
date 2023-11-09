import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'
import books_banner from '../../Assets/Books_Banner.jpeg'
import clothes_banner from '../../Assets/Clothes_Banner.jpeg'
import electronics_banner from '../../Assets/Electronics_Banner.jpeg'
import grocery_banner from '../../Assets/Grocery_Banner.jpg'

const BannerSlider = () => {
  const data = [
    {
      id: 1,
      image: books_banner,
      title: 'Books',
      description: 'Books on the Shelf',
      button: 'https://www.google.com'
    },
    {
      id: 2,
      image: clothes_banner,
      title: 'Clothes',
      description: 'Clothes in the Wardrobe',
      button: 'https://www.google.com'
    },
    {
      id: 3,
      image: electronics_banner,
      title: 'Electronics',
      description: 'Explore the world of electronics',
      button: 'https://www.google.com'
    },
    {
      id: 4,
      image: grocery_banner,
      title: 'Grocery',
      description: 'Grocery at your Doorstep',
      button: 'https://www.google.com'
    }
  ]

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true
  }
  return (
    <div>
      <Slider className='banner-slider' {...settings}>
        {
          data.map(item=>{
            return (
              <div className='banner-slider-item' key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className='banner-slider-item-content'>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <button>Shop Now</button>
                </div>
              </div>)
          })
        }
      </Slider>
    </div>
  )
}

export default BannerSlider