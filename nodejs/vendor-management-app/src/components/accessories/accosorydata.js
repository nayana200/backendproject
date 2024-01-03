import React, { useState, useEffect } from "react";
import AccessorySideNav from "./accessorysidenav";
import { Container, Row, Col } from "react-bootstrap";
import { useProducts } from "../products";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Accessories() {
    const { products, setCart } = useProducts();
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 12;
    const endingIndex = page * itemsPerPage;
    const startingIndex = endingIndex - itemsPerPage;
    const displayProducts =
        items.length !== 0 ? items.slice(startingIndex, endingIndex) : [];
    const limit =
        products.length !== 0 && Math.ceil(products.length / itemsPerPage);
    const arr = Array.from({ length: limit }, (_, i) => i + 1);

    useEffect(() => {
        setItems(products);
    }, [products]);

    const handlePageClick = (pageNumber, e) => {
        e.preventDefault();
        setPage(pageNumber);
    };

    return (
        <Container style={{ position: "relative" }}>
            <Row style={{ height: "100vh" }}>
                <Col className="col-3">
                    <AccessorySideNav />
                </Col>
                <Col className="col-9">
                    <Row>
                        {displayProducts.length !== 0 &&
                            displayProducts.map((ele) => (
                                <Col key={ele.id} className="col-sm-6 col-lg-3">
                                    <Link
                                        className="text-black text-decoration-none"
                                        to="/cart"
                                        onClick={() => setCart(ele)}
                                    >
                                        <img
                                            src={ele.image}
                                            className="img-fluid"
                                            width="300px"
                                            height="300px"
                                            alt={ele.title}
                                        />
                                        <p className="text-capitalize text-truncate fw-bold">
                                            {ele.title}
                                        </p>
                                        <span className="d-flex justify-content-between">
                                            <p className="d-inline fw-bold">$ {ele.price}</p>
                                            <FaShoppingCart onClick={() => setCart(ele)} />
                                        </span>
                                    </Link>
                                </Col>
                            ))}
                    </Row>
                </Col>
            </Row>
            <ul className="pagination" style={{ position: "absolute", right: "0px", bottom: "0px" }}>
                {arr.length !== 0 &&
                    arr.map((pageNumber) => (
                        <li key={pageNumber} className="page-item">
                            <a
                                className="page-link"
                                href="sha"
                                onClick={(e) => handlePageClick(pageNumber, e)}
                            >
                                {pageNumber}
                            </a>
                        </li>
                    ))}
            </ul>
        </Container>
    );
}

export default Accessories;
