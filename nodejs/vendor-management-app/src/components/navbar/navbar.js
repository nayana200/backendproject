import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useUser } from "../signinsignup/useContext";
import Form from 'react-bootstrap/Form';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";

import Button from '@mui/material/Button';
import '../products/pro.css'


const categories = [
    'Electronics',
    'Clothing',
    'Books',
    'Home & Kitchen',
    'Toys & Games',
    'Beauty & Personal Care',
    'Sports & Outdoors',
    'Automotive',
    'Movies & TV Shows',

];

const Navbar = (props) => {
    const { userId } = useUser();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [searchAnchorEl, setSearchAnchorEl] = React.useState(null);
    const [accountMenuAnchor, setAccountMenuAnchor] = React.useState(null);



    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSearchOpen = (event) => {
        setSearchAnchorEl(event.currentTarget);
    };

    const handleSearchClose = () => {
        setSearchAnchorEl(null);
    };
    const handleAccountMenuOpen = (event) => {
        setAccountMenuAnchor(event.currentTarget);
    };

    const handleAccountMenuClose = () => {
        setAccountMenuAnchor(null);
    };


    const imageUrl = 'https://pixeltemplate.com/wordpress/shopeur/wp-content/themes/Shopeur/images/webi/logo.png';

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
                <Toolbar >
                    <img src={imageUrl} alt="Descriptionoftheimage" />

                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="search"
                        onClick={handleSearchOpen}
                        style={{ margin: 0, fontSize: "20px" }}
                    >
                        All Categories <ExpandMoreIcon />


                    </IconButton>
                    <Menu
                        id="menu-categories"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        PaperProps={{
                            style: {
                                maxHeight: 300,
                                width: '20ch',
                            },
                        }}
                    >
                        {categories.map((category) => (
                            <MenuItem key={category} onClick={handleMenuClose}>
                                {category}
                            </MenuItem>
                        ))}
                    </Menu>
                    <div style={{ position: 'relative', display: 'inline-block', margin: 0 }}>

                        <Popover
                            open={Boolean(searchAnchorEl)}
                            anchorEl={searchAnchorEl}
                            onClose={handleSearchClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <List style={{ maxHeight: 300, overflow: 'auto', width: '200px' }}>
                                {categories.map((category) => (
                                    <ListItem button key={category}>
                                        <ListItemText primary={category} />
                                    </ListItem>
                                ))}
                            </List>
                        </Popover>
                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search" style={{ width: "400px", border: "1px solid #00000" }} className=" border-0 " aria-label="Search" />
                            <Button variant="warning" style={{ background: "rgb(246, 215, 47)", color: "black" }}>Search</Button>
                        </Form>

                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-around", marginLeft: "92px" }}>

                        <Toolbar className="theme-container">


                            <Button onClick={handleAccountMenuOpen}>
                                <AccountCircleIcon style={{ height: "50px", width: "40px", color: "wheat", backgroundColor: "glass" }} />
                                <span>
                                    <span className="woocommerce-Price-amount amount" style={{ color: "black" }}>My Account<br></br>
                                        <span className="woocommerce-Price-currencySymbol"><Link to="/signin" className={{ color: "black", textDecoration: "none" }}>Sign in</Link></span>
                                    </span>
                                </span>

                            </Button>
                            <Menu
                                anchorEl={accountMenuAnchor}
                                open={Boolean(accountMenuAnchor)}
                                onClose={handleAccountMenuClose}
                            >
                                <MenuItem component={Link} to="https://pixeltemplate.com/wordpress/shopeur/my-account/">
                                    My Account
                                </MenuItem>
                                <MenuItem component={Link} to="https://pixeltemplate.com/wordpress/shopeur/checkout/">
                                    Checkout
                                </MenuItem>
                                <MenuItem component={Link} to="https://pixeltemplate.com/wordpress/shopeur/checkout/">
                                    User Login
                                </MenuItem>
                            </Menu>


                            {/* onClick={handleCartMenuOpen} */}
                            <Button >
                                <ShoppingCartIcon style={{ height: "50px", width: "40px", color: "wheat", backgroundColor: "glass" }} />
                                <span>
                                    <span className="woocommerce-Price-amount amount" style={{ color: "black" }}>
                                        <div style={{ lineHeight: "1px" }}>
                                            <h6>
                                                <Link to="/cart" className="text-decoration-none text-black">My Cart</Link>
                                            </h6>
                                            <p style={{ color: "grey", fontSize: "smaller" }}></p>
                                        </div>
                                        <br></br>

                                    </span>
                                </span>
                            </Button>



                        </Toolbar>

                    </div>
                </Toolbar>

            </AppBar>

        </div>

    );
};

export default Navbar;
