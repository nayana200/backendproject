import React from "react"
import Slider from 'react-slick';
import { Typography, Rating } from '@mui/material';


import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Ddata from "./Ddata"
import "../newarrivals/style.css"

const Dcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,


  }

  return (
    <>
      <Slider {...settings} style={{ width: "93%", marginLeft: "42px" }}>
        {Ddata.map((value, index) => {
          return (
            <>
              <div className='box product' key={index}>
                <div className='img'>
                  <img src={value.cover} alt='' width='100%' />
                </div>
                <Typography component="legend"></Typography>
                <Rating name="customized-10" defaultValue={4} max={5} style={{ marginLeft: "22px" }} />
                <h6 style={{ marginLeft: "22px" }}>{value.name}</h6>
                <span style={{ marginLeft: "22px" }}>{value.price}</span>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Dcard
