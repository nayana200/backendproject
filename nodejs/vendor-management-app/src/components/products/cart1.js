import { useEffect, useState } from 'react';
import './pro.css';

function CartList1({ cart }) {

    const [CART, setCART] = useState([])


    useEffect(() => {
        setCART(cart)
    }, [cart])
    const removeFromCart = product => {

        const index = cart.findIndex(item => item.id === product.id);
        if (index !== -1) {
            const updatedCart = [...cart];
            updatedCart.splice(index, 1);
            setCART(updatedCart);
        };
    };
    return (
        <div>
            {
                CART?.map((cartItem, cartindex, productItem, productIndex) => {
                    return (
                        <div>
                            <img src={cartItem.url} width={40} alt="sshhs" />
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
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity - 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</button>
                            <span> Rs. {cartItem.price * cartItem.quantity} </span>
                            <button
                                onClick={() => removeFromCart(productItem)}
                            ><i class="fa fa-trash" aria-hidden="true" style={{ color: "red", backgroundColor: "white", border: "none" }}></i></button>

                        </div>

                    )
                })
            }

            <p> Total  <span></span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>
        </div>
    )
}

export default CartList1