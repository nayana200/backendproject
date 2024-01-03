import React, { useState, useEffect } from "react"
import SideNav from "./home"
import { Container, Row, Col } from "react-bootstrap"
import { useProducts } from "../products"
import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";


function Data() {
    let { products, setCart } = useProducts()
    let [items, setItems] = useState([])
    let [page, setPage] = useState(1)
    let itemsPerPage = 12
    let endingIndex = page * itemsPerPage
    let startingIndex = endingIndex - itemsPerPage
    let displayProducts = items.length !== 0 ? items.slice(startingIndex, endingIndex) : []
    let limit = products.length !== 0 && Math.ceil(products.length / itemsPerPage)
    let arr = []
    for (let i = 1; i <= limit; i++) {
        arr.push(i)
    }
    useEffect(() => {


        setItems(products)
    }, [products])

    return (<Container style={{ position: 'relative' }}>
        <Row style={{ height: '100vh' }}>
            <Col className="col-3">
                <SideNav></SideNav>
            </Col>
            <Col className="col-9" >
                <Row>
                    {displayProducts.length !== 0 && displayProducts.map((ele, ind) => {
                        return (<Col className="col-sm-6 col-lg-3">
                            <Link className="text-black text-decoration-none" to='/cart' onClick={() => setCart(ele)}>
                                <img src={ele.image} className="img-fluid" alt="sh" width="300px" height="300px" />
                                <p className="text-capitalize text-truncate fw-bold">{ele.title}</p>
                                <span className="d-flex justify-content-between"> <p className="d-inline fw-bold" >$ {ele.price}</p>
                                    <FaShoppingCart onClick={() => setCart(ele)} /></span>
                            </Link>
                        </Col>)
                    })}

                </Row>
            </Col>



        </Row>
        <ul class="pagination" style={{ position: 'absolute', right: '0px', bottom: '0px' }}>

            {arr.length !== 0 && arr.map((ele) => {
                return (<li class="page-item" key={ele}><a class="page-link" href="bh" onClick={() => setPage(ele)}>{ele}</a></li>)
            })}


        </ul>
    </Container>)
}


export default Data