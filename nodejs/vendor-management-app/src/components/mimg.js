import React, { useEffect, useState } from 'react'
import axios from 'axios'



function Imges() {
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
    }, []);


    return (

        <div className='container md-3'>
            <div className='mb-3'>
                <h3>  TOP CATEGORY</h3>

            </div>
            <div className='row'>

                {products ? (
                    products.map((item, index) => (
                        <div key={index} className='col  my-3 fs-6'>
                            <div className='card '>
                                <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/5-1-360x400_t.jpg" className="img-fluid position-relative" alt="images" height={150} />

                            </div>
                        </div>
                    ))
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>

        </div>
    );
}

export default Imges