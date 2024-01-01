import React from 'react'
import Icon from '@mui/material/Icon';


const Onproduct = (cart) => {


    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>

                        <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/5-1-360x400_t.jpg" alt='hsyys'></img>



                    </div>

                    <div className='col-7'>
                        <h2>Apple Watch Collection</h2>
                        <hr></hr>
                        <h3>$72.00 – $88.00</h3>
                        <hr></hr>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        <button className='btn btn-primary'>ADD TO CART</button>
                        <hr></hr>
                        <Icon baseClassName="fas" className="fa-plus-circle" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Onproduct
