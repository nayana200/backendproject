import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const CheckoutForm = () => {
    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
    });

    const [paymentMode, setPaymentMode] = useState({
        cardNumber: '',
        cardHolderName: '',
        expirationDate: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your form submission logic here
    };

    const handleOrder = () => {
        // Your order placement logic here
    };

    return (
        <Container>
            <Row>
                <Col className='mt-5 mb-5'>
                    <h5>CHECKOUT</h5>
                    <h5 className='mt-5'>BILLING DETAILS</h5>
                    <Form onSubmit={handleSubmit}>
                        {['street', 'city', 'state', 'postalCode', 'country'].map((field) => (
                            <Form.Group key={field} className='mb-3'>
                                <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder={`Enter ${field}`}
                                    value={address[field]}
                                    onChange={(e) => setAddress({ ...address, [field]: e.target.value })}
                                />
                            </Form.Group>
                        ))}
                        {['cardNumber', 'cardHolderName', 'expirationDate'].map((field) => (
                            <Form.Group key={field} className='mb-3'>
                                <Form.Label>{field === 'cardNumber' ? 'Card Number' : field}</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder={`Enter ${field.toLowerCase()}`}
                                    value={paymentMode[field]}
                                    onChange={(e) => setPaymentMode({ ...paymentMode, [field]: e.target.value })}
                                />
                            </Form.Group>
                        ))}
                        <Button variant='primary' type='submit'>
                            SAVE
                        </Button>
                    </Form>
                    <p className='mt-4 col-12'>
                        Your personal data will be used to process your order, support your experience throughout this website, and
                        for other purposes described in our<span className='text-primary'>privacy and policy</span>.
                    </p>
                    <div className='d-flex flex-row mt-4'>
                        <input type='checkbox' />
                        <p className='mx-4 mt-2'>
                            I have read and agree to the website <span className='text-primary'>terms and conditions *</span>
                        </p>
                    </div>
                    <div className='mt-4' style={{ float: 'right' }}>
                        <button className='btn btn-primary' onClick={handleOrder}>
                            PLACE ORDER
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CheckoutForm;
