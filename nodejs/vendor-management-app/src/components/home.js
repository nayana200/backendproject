import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import image from '../images/images.jpeg'


function Homepage() {
    const [products, setproducts] = useState();
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
    return (
        <div className='row'>
            {products ? (
                products.map((item, index) => (
                    <div key={index} className='col-sm-3  my-3 fs-6'>
                        <div className='card'>

                            <div className='card-title'>{item.productName}
                                <div className='card-body'>
                                    <p class="card-text text-truncate">{item.description}</p>
                                    <div >
                                        <p>price: {item.price}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    )


};



export default Homepage



