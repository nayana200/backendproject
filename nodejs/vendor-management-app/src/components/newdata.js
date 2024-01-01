import React from 'react';
import { Row, Col } from 'react-bootstrap';

const CMSBannerItem = ({ text1, text2, linkText }) => {
    return (

        <div className="cms-banner-inner">
            <div className="cms-banner-img">

                <div style={{ position: 'relative', width: '90%', maxWidth: '360px' }}>


                    {/* <img
                        src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2021/07/2.jpg"
                        alt="Uncategorized"
                        style={{ width: '150%', height: 'auto', display: 'block' }}
                    /> */}
                    <img
                        src="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2021/07/1.jpg"
                        alt="Uncategorized"
                        style={{ width: '170%', height: 'auto', display: 'block' }}
                    />

                    {/* Text Overlay */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',  // Adjust the top position as needed
                            left: '50%', // Adjust the left position as needed
                            transform: 'translate(-50%, -50%)',
                            color: '#000000', // Text color
                            textAlign: 'center',

                        }}
                    >

                        <h6 style={{ margin: 0 }}>{text1}</h6>
                        <p style={{ margin: 0 }}>
                            {text2}</p>
                        <a href="ggdd" target="" className="link-text">
                            {linkText} <i className="fa fa-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
};

const YourComponent = () => {
    return (
        <div className="container-fulid mt-4">
            <Row className="vc_row wpb_row vc_inner vc_row-fluid cms-banner" style={{
                marginLeft: "22px", width: "98%"
            }}>
                {/* Left Banner */}
                <Col sm={6} className="cms-banner-left">
                    <CMSBannerItem
                        // ImageUrl="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2021/07/1.jpg"
                        text1="New Smart Watch"
                        text2="Get up to 50% off"
                        linkText="Shop now"
                    />
                </Col>

                {/* Right Banner */}
                <Col sm={6} className="cms-banner-right">
                    <CMSBannerItem
                        // ImageUrl="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2021/07/2.jpg"
                        text1="New Mobile"
                        text2="Get up to 50% off"
                        linkText="Shop now"
                    />
                </Col>
            </Row>
        </div>
    );
};

export default YourComponent;
