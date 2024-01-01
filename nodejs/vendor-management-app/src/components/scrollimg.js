
import React from "react"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ScroolData from "./scrolldata"
// import "../newarrivals/style.css"

const ScollDcard = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,


    }
    const styles = {
        border: '1px solid rgba(0, 0, 15, 0.05)',
        width: "93%",
        marginLeft: "23px"
    };
    return (
        <>
            <Slider {...settings} style={styles} className="mt-5">
                {ScroolData.map((value, index) => {
                    return (
                        <>
                            <div className='box product' key={index} style={{ margin: "12px" }}>
                                <div className='img'>
                                    <img src={value.cover} alt='' width='70%' height={"80px"} />
                                </div>

                            </div>
                        </>
                    )
                })}
            </Slider>
        </>
    )
}

export default ScollDcard
