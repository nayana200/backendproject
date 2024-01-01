// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';


const SubNavbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" >Home</Button>
                <Button color="inherit" >Shop</Button>



                <Button
                    color="inherit"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    Blog
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} >Left Sidebar</MenuItem>
                    <MenuItem onClick={handleClose} >Right Sidebar</MenuItem>
                    <MenuItem onClick={handleClose} >No Sidebar</MenuItem>

                </Menu>
                <Button
                    color="inherit"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    Pages
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} >Servies</MenuItem>
                    <MenuItem onClick={handleClose} >FAQs Page</MenuItem>
                    <MenuItem onClick={handleClose} >Gallery</MenuItem>
                    <MenuItem onClick={handleClose} >Elements</MenuItem>
                    <MenuItem onClick={handleClose} >Page 404</MenuItem>
                    <MenuItem onClick={handleClose} >About Us</MenuItem>

                </Menu>
                <Button color="inherit" >Contact Us</Button>
                <Button color="inherit" >Features</Button>
                <Button color="inherit"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}

                >Category</Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} >Accessories</MenuItem>
                    <MenuItem onClick={handleClose} >Spintronics</MenuItem>
                    <MenuItem onClick={handleClose} >Atomtronics</MenuItem>
                    <MenuItem onClick={handleClose} >Nintendo</MenuItem>
                    <MenuItem onClick={handleClose} >Night Lamps</MenuItem>

                </Menu>

                <Button color="inherit" style={{ justifyContent: "end", marginLeft: "45%" }}><img src="https://pixeltemplate.com/wordpress/shopeur/wp-content/themes/Shopeur/images/webi/svg/label.svg" alt="hdhd" width="40px" height={"30px"}></img>Special Offers</Button>

            </Toolbar>
        </AppBar>
    );
};

export default SubNavbar;
