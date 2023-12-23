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
const Order = require('../models/order')



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




const emailConfig = {
    service: 'gmail',
    auth: {
        user: 'nayanareddy2004@gmail.com',
        pass: 'nayana2021',
    },
};

const transporter = nodemailer.createTransport(emailConfig);

// In-memory storage for simplicity (replace with a database in a real application)
const data2 = [
    { id: 1, email: 'nayanareddy2004@gmail.com', password: 'hashed_password' },
];

router.use(bodyParser.urlencoded({ extended: true }));

router.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    const user = data2.findOne({ email });

    if (!user) {
        return res.status(404).send('User not found');
    }

    // Generate a unique token
    const token = crypto.randomBytes(20).toString('hex');
    user.resetToken = token;
    user.resetTokenExpiration = Date.now() + 3600000; // Token valid for 1 hour

    // Send email with reset link
    const resetLink = `http://localhost:3000/reset-password/${token}`;
    const mailOptions = {
        from: 'nayanareddy2004@gmail.com',
        to: 'User.email',
        subject: 'Password Reset',
        text: `Click the following link to reset your password: ${resetLink}`,
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.error(error);
            return res.status(500).send('Error sending email');
        }
        res.send('Email sent with instructions to reset your password');
    });
});

router.get('/reset-password/:token', (req, res) => {
    const token = req.params.token;
    const user = users.find((user) => user.resetToken === token && user.resetTokenExpiration > Date.now());

    if (!user) {
        return res.status(403).send('Invalid or expired token');
    }

    // Render a form to reset the password
    res.sendFile(__dirname + '/reset-password.html');
});

router.post('/reset-password/:token', (req, res) => {
    const token = req.params.token;
    const newPassword = req.body.newPassword;

    const user = users.find((user) => user.resetToken === token && user.resetTokenExpiration > Date.now());

    if (!user) {
        return res.status(403).send('Invalid or expired token');
    }

    // Update the user's password
    user.password = newPassword;
    delete user.resetToken;
    delete user.resetTokenExpiration;

    res.send('Password reset successfully');
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



router.post('/orders', formidable(), async (req, res) => {
    try {
        const newOrder = new Product(req.fields);
        const saveOrder = await newProduct.save();
        res.status(201).json(saveOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get all orders
router.get('/orders', formidable(), async (req, res) => {
    try {
        const orders = await Order.find().populate('orderItems.product');
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get a specific order by ID
router.get('/orders/:id', formidable(), async (req, res) => {
    try {
        const orderId = req.params.id;

        const order = await Order.findById(orderId).populate('orderItems.product');

        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update an order by ID
router.put('/orders/:id', formidable(), async (req, res) => {
    try {
        const orderId = req.params.id;
        const { customerName, orderItems } = req.body;

        const totalAmount = orderItems.reduce((total, item) => total + item.quantity * item.unitPrice, 0);

        const updatedOrder = await Order.findByIdAndUpdate(orderId, { customerName, totalAmount, orderItems }, { new: true }).populate('orderItems.product');

        if (!updatedOrder) {
            return res.status(404).json({ error: 'Order not found' });
        }

        res.json(updatedOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete an order by ID
router.delete('/orders/:id', formidable(), async (req, res) => {
    try {
        const orderId = req.params.id;

        const deletedOrder = await Order.findByIdAndDelete(orderId).populate('orderItems.product');

        if (!deletedOrder) {
            return res.status(404).json({ error: 'Order not found' });
        }

        res.json(deletedOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Add product to user's cart
router.post('/cart/add', async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;

        const user = await User.findById(userId);
        const product = await Product.findById(productId);

        if (!user || !product) {
            return res.status(404).json({ error: 'User or product not found' });
        }

        const existingCartItem = user.cart.find(item => item.product.equals(productId));

        if (existingCartItem) {
            existingCartItem.quantity += quantity || 1;
        } else {
            user.cart.push({ product: productId, quantity: quantity || 1 });
        }

        await user.save();

        res.json(user.cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get user's cart
router.get('/cart/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId).populate('cart.product');

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user.cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Remove product from user's cart
router.delete('/cart/remove', async (req, res) => {
    try {
        const { userId, productId } = req.body;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.cart = user.cart.filter(item => !item.product.equals(productId));
        await user.save();

        res.json(user.cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});






// router.post('/order', formidable(), async (req, res) => {
//     try {
//         const newProduct = new Product(req.fields);
//         const savedProduct = await newProduct.save();
//         res.status(201).json(savedProduct);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });




// router.post('/login', async (req, res, next) => {
//     res.send("login route")
// })

// router.post('/refresh-token', async (req, res, next) => {
//     res.send("registered refresh-token")
// })
// router.delete('/logout', async (req, res, next) => {
//     res.send("logout route")
// })

module.exports = router

