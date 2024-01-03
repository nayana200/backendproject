import React from "react"
import Ndata from "./Ndata"
import Slider from 'react-slick';
const Cart = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <div className="container">
        <h1>Faetured Products</h1>
        <Slider {...settings}>

          {Ndata.map((val, index) => {
            return (
              <div className='box' key={index}>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <h4>{val.name}</h4>
                <span>${val.price}</span>
              </div>
            )
          })}

        </Slider>
      </div>

    </>
  )
}

export default Cart
