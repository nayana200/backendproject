import './pro.css';
import Slider from 'react-slick';
function ProductList({ product, addToCart }) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,


    }
    return (
        <Slider {...settings} style={{ width: "93%", marginLeft: "42px" }}>

            {product.map((productItem, productIndex) => {
                return (
                    <div style={{ width: '33%' }}>
                        <div className='product-item'>
                            <img src={productItem.url} width="100%" alt="bshgs" onClick={() => addToCart(productItem)} />
                            <p>{productItem.name} | {productItem.category} </p>
                            <p> {productItem.seller} </p>
                            <p> Rs. {productItem.price} /-</p>
                            {/* <button
                                onClick={() => addToCart(productItem)}
                            >Add To Cart</button> */}
                        </div>
                    </div>
                )
            })
            }

        </Slider>
    )
}

export default ProductList