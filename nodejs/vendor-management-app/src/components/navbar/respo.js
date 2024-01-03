import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { DesktopWindows, PhoneAndroid, TabletMac } from '@mui/icons-material';

const Main = () => {
    const imageUrl = 'https://www.webibazaar.com/image/catalog/webi-logo.png';

    return (
        <>
            <div className="header">
                <div className="bar">


                    <AppBar position="static" style={{
                        backgroundColor: "#e1e2e9", padding: "5px 20px"
                    }}>
                        <Toolbar>
                            <img src={imageUrl} alt="Description of the i" />
                            <Typography variant="h6" style={{ flexGrow: 1, marginLeft: '16px', fontSize: "16px", fontWeight: "500", letterSpacing: "0.8", color: 'black' }}>
                                Shopeur Electronics WooCommerce Theme
                            </Typography>
                            <IconButton edge="start" aria-label="desktop" style={{ margin: "8px" }} >

                                <DesktopWindows style={{ height: "37px", width: "40px" }} /> <p style={{ fontSize: "18px" }}>Desktop</p>
                            </IconButton>
                            <IconButton edge="start" aria-label="tablet" style={{ margin: "8px" }}>

                                <TabletMac style={{ height: "37px", width: "40px" }} /> <p style={{ fontSize: "18px" }}>Tablet</p>
                            </IconButton>
                            <IconButton edge="start" aria-label="mobile" style={{ margin: "8px" }}>

                                <PhoneAndroid style={{ height: "37px", width: "40px" }} /> <p style={{ fontSize: "18px" }}>Mobile</p>
                            </IconButton>
                            <Button style={{ color: "white", backgroundColor: "blue", fontFamily: "'Sarabun', sans-serif", fontSize: "12px" }} to="/contact">
                                Buy Now
                            </Button>
                        </Toolbar>
                    </AppBar>

                </div>
            </div>

        </>
    )
}

export default Main
