import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './cartslider.css'
import './home.css'
// import SubNav2 from '../navbar/secnavbar'
// import Thirdbar from '../navbar/navbar'
function Homepage() {


    const [products, setproducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(10);
    useEffect(() => {
        const getproducts = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:4000/auth/products'
                );
                const data = await response.data;
                setproducts(data);

            } catch (error) {
                console.log(error)
            }
        }
        getproducts();
    }, [])
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % products.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 2 + products.length) % products.length
        );
    };

    return (
        <>
            {/* <SubNav2 />
            <Thirdbar /> */}
            <div className='container'>
                <div className="card-slider">
                    <div className="card-container">

                        {products.slice(currentIndex, currentIndex + 4).map((item, index) => (


                            <div key={index} className='col-sm-3 col-lg-3 my-3 fs-6'>
                                <div className='card' style={{ margin: "3px" }}>

                                    <Link to={`products/${item._id}`}>
                                        <img src={item.imageUrl} alt="shshs" width={"200px"} height={"200px"} />
                                        <div className='card-title' style={{ color: "black", textDecoration: "none" }}>{item.name}
                                            <div className='card-body'>
                                                <p class="card-text text-truncate" style={{ color: "black", textDecoration: "none" }}>{item.description}</p>
                                                <div >
                                                    <p style={{ color: "black", textDecoration: "none" }}>price: {item.price}</p>
                                                </div>

                                            </div>
                                        </div>
                                    </Link>
                                    <div className="icons-container">
                                        <span className="icon">❤️</span>
                                        <span className="icon">🛒</span>
                                        <span className="icon">👍</span>
                                        <span className="icon">💬</span>
                                    </div>
                                </div>

                            </div>

                        ))}

                        <button className="prev" onClick={handlePrev}>&lt;</button>
                        <button className="next" onClick={handleNext}>&gt;</button>

                        {/* </Slider> */}
                    </div>
                </div>
            </div>

        </>



    )
}



export default Homepage



