// import React from 'react'

// const Themeextimg = () => {
//     return (
//         <div>
//             <a className="image-link" href="gg" title="Home">
//                 <img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2021/07/1530x300.jpg" alt="ds"></img>
//             </a>
//         </div>
//     )
// }

// export default Themeextimg

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CMSBannerItem = ({ imageSrc, text1, text2, linkText }) => {
    return (

        <div className="cms-banner-inner">
            <div className="cms-banner-img">

                <div style={{ position: 'relative', width: '100%', maxWidth: '360px' }}>

                    <img
                        src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2021/07/1530x300.jpg"
                        alt="Uncategorized"
                        style={{ width: '370%', height: '200px', display: 'block' }}
                    />


                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '250%',
                            transform: 'translate(-50%, -50%)',
                            color: '#000000',
                            textAlign: 'center',

                        }}
                    >
                        <h6 style={{ width: "770px" }}>{text1}</h6>
                        <p style={{ width: "770px", fontSize: "12px" }}>
                            {text2}</p>
                        <a href="ggdd" target="" className="link-text" >
                            {linkText} <i className="fa fa-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
};

const Themeextimg = () => {
    return (
        <Container fluid className="theme-container mt-4">
            <Row className="vc_row wpb_row vc_inner vc_row-fluid cms-banner">

                <Col sm={6} className="cms-banner-left">
                    <CMSBannerItem

                        text1="Create Your Own VAIO Laptop"
                        text2="CHOOSE THE COLOUR, SCREEN SIZE AND PERFORMANCE"
                        linkText="Shop now"
                    />
                </Col>


            </Row>
        </Container>

    );
};

export default Themeextimg;

