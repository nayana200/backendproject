import { useEffect, useState } from 'react';
import './pro.css';

function CartList({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div>
            {
                CART?.map((cartItem, cartindex, props) => {
                    return (
                        <div>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-4'>

                                        <img src={cartItem.url} width={"100%"} height={"100%"} alt="snjsj" />



                                    </div>

                                    <div className='col-7'>
                                        <h2>Apple Watch Collection</h2>
                                        <hr></hr>
                                        <h3>$72.00 – $88.00</h3>
                                        <hr></hr>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


                                        <hr></hr>

                                        <span> {cartItem.name} </span>
                                        <button
                                            onClick={() => {
                                                const _CART = CART.map((item, index) => {
                                                    return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                                })
                                                setCART(_CART)
                                            }}
                                        >-</button>
                                        <span> {cartItem.quantity} </span>
                                        <button
                                            onClick={() => {
                                                const _CART = CART.map((item, index) => {
                                                    return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                                })
                                                setCART(_CART)
                                            }}
                                        >+</button>
                                        <span> Rs. {cartItem.price * cartItem.quantity} </span>
                                        <button className='btn btn-primary'>ADD TO CART</button>
                                        <hr></hr>
                                        <i className="fa-regular fa-heart"></i>Add to Wishlist
                                        <i className="fa-regular fa-heart"></i>Compare
                                        <hr></hr>
                                        <p> Total  <span></span>
                                            {
                                                CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }


        </div>
    )
}

export default CartList