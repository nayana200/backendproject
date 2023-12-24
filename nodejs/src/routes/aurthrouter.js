const express = require("express")
const bcrypt = require("bcrypt")
const router = express.Router()
const jwt = require("jsonwebtoken")
const formidable = require("express-formidable")
const data = require("../models/usermodel")
const Product = require('../models/products')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const verifyToken = require('../common-middlewares/index')
const order = require('../models/order')
const crypto = require('crypto');
const Cart = require("../models/cart")

router.post('/register', formidable(), async function (req, res) {

    let { firstname, lastname, email, phone, password } = req.fields
    if (!(firstname && lastname && email && phone && password)) {
        res.status(400).send("not provieded the valid the data")
    } else {
        if (await data.findOne({ email })) {
            res.send("user already exits")
        } else {
            const encpassword = await bcrypt.hash(req.fields.password, 10)
            const base = await data.create({
                firstname: req.fields.firstname,
                lastname: req.fields.lastname,
                email: req.fields.email,
                phone: req.fields.phone,
                password: encpassword


            })
            let token = jwt.sign({ email }, process.env.TOKEN_KEY, { expiresIn: "5h" })

            console.log(token)
            base.token = token
            console.log(base)


            res.status(200).send("registered sucessfully")
        }

    }
})

router.post('/login', formidable(), async function (req, res) {
    let { email, password } = req.fields
    if (!(email && password)) {
        res.status(400).send('Provide all the inputs')
    }
    else {
        const user = await data.findOne({ email })
        if (user && (await bcrypt.compare(req.fields.password, user.password))) {
            let usetoken = jwt.sign({ email }, process.env.TOKEN_KEY, { expiresIn: "5h" })
            user.token = usetoken
            res.json(user)
        }
        else {
            res.status(400).send('Incorrect username or password!!')
        }
    }
})

router.get("/homepage", verifyToken, function (req, res) {
    res.send("welcome to ecommerce website")
})

router.post('/forgot-password', formidable(), async function (req, res) {
    try {
        const email = req.fields.email;

        const user = await data.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        console.log('token')

        // Generate random reset token for user
        const token = crypto.randomBytes(20).toString('hex');
        console.log(token)
        const resetExpires = Date.now() + 100 * 60 * 60;

        // Update user with reset token and expiration
        user.resetPasswordToken = token;
        user.resetPasswordExpires = resetExpires;
        await user.save();

        // Send reset password email for user
        const transporter = nodemailer.createTransport({

            service: 'gmail',
            port: 587,
            auth: {
                user: 'nayanareddy2004@gmail.com',
                pass: 'omuhwysutxjufvua'
            },
            tls: { rejectUnauthorized: false }

        });

        const mailOptions = {
            to: user.email,
            from: 'nayanareddy2004@gmail.com',
            subject: 'Password Reset',
            text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n` +
                `Please click on the following link, or paste this into your browser to complete the process:\n\n` +
                `http://localhost:3000/reset/${token}\n\n` +
                `If you did not request this, please ignore this email and your password will remain unchanged.\n`
        };

        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ message: 'Error sending email' });
            }
            res.status(200).json({ message: 'Email sent successfully' });
        });

    } catch (err) {
        console.error('Error in forgot password:', err);
        res.status(500).json({ message: 'Server Error' });
    }
});



//  handle password reset link clicks
router.get('/reset/:token', formidable(), async (req, res) => {
    try {
        const { token } = req.params;


        const user = await data.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() + 100 * 60 * 60 }
        });

        if (!user) {
            return res.status(400).json({ message: 'Password reset link is invalid or expired please check again' });
        }


        res.send("this is a token of resetpassword" + " " + token);

    } catch (err) {
        console.error('Error in password reset:', err);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.post('/reset/:token', formidable(), async (req, res) => {
    try {
        const { token } = req.params;
        const { password } = req.fields;

        const user = await data.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ message: 'Password reset link is invalid or expired' });
        }


        const enccryptpassword = await bcrypt.hash(password, 10)
        user.password = enccryptpassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        res.status(200).json({ message: 'Password reset successful' });

    } catch (err) {
        console.error('Error in resetting password:', err);
        res.status(500).json({ message: 'Server Error' });
    }
});


router.post('/products', formidable(), async (req, res) => {
    try {
        const newProduct = new Product(req.fields);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error 6778' });
    }
});



router.get('/products', formidable(), async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get a specific product by ID
router.get('/products/:id', formidable(), async (req, res) => {
    try {
        const productId = req.params.id;

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update a product by ID

router.put('/products/:id', formidable(), async (req, res) => {
    try {
        const productId = req.params.id;
        const { name, price } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(productId, { productName, price }, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete a product by ID
router.delete('/products/:id', formidable(), async (req, res) => {
    try {
        const productId = req.params.id;

        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json(deletedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



router.post("/order", async (req, res) => {
    const newOrder = new order(req.body);

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);

    } catch (err) {
        console.log("hii")
        res.status(500).json(err);
    }
});


//UPDATE
router.put("/order/:id", formidable(), async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/order/:id", formidable(), async (req, res) => {
    try {
        await order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER ORDERS
router.get("/order/find/:userId", formidable(), async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});

// //GET ALL

router.get("/order", formidable(), async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/order', formidable(), async (req, res) => {
    try {
        const newProduct = new Product(req.fields);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.post("/cart", async (req, res) => {
    const newCart = new Cart(req.body);

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);

    } catch (err) {

        res.status(500).json(err);
    }
});




router.put("/cart/:id", formidable(), async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/cart/:id", formidable(), async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER CART
router.get("/cart/find/:userId", formidable(), async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
});

// //GET ALL

router.get("/cart", formidable(), async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
});





module.exports = router

