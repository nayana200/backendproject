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
const Category = require('../models/category')
const Subcategory = require("../models/subcategory")
const Vendor = require('../models/vendor')
const upload = require('./multer')

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


// router.post('/products', formidable(), async (req, res) => {
//     const { name, price, quantity, color, brand, main_category, sub_category, vendor_id } = req.body
//     // const image = req.file
//     // console.log(image)
//     if (name && price && quantity && color && brand && main_category && sub_category && vendor_id) {
//         try {
//             const checkVendor = await vendor_collection.findOne({ _id: vendor_id })
//             if (checkVendor) {
//                 const uploadProducts = await product_collection.create({ name: name, price: price, quantity: quantity, color: color, brand: brand, main_category: main_category, sub_category: sub_category, vendor: vendor_id })
//                 const updateVendor = await vendor_collection.updateOne({ _id: vendor_id }, { $push: { products: uploadProducts._id } })
//                 return res.status(200).send('products added successfully')
//             }
//             else {
//                 return res.status(400).send('only vendors can add products')
//             }

//         }
//         catch (error) {
//             return res.status(500).send('server error')
//         }
//     }
//     else {
//         return res.status(400).send('provide the proper details')
//     }
// })

router.post('/products', async (req, res) => {
    try {
        const data = new Product(req.body);
        await data.save();
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
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
router.get('/products/add', formidable(), async (req, res) => {
    try {
        const { name, price, description, category, quantity, createdBy } = req.body;
        let productPictures = [];

        if (req.files.length > 0) {
            productPictures = req.files.map((file) => {
                return { img: file.location };
            });
        }

        const product = new Product({
            name: name,
            slug: slugify(name),
            price,
            quantity,
            description,
            productPictures,
            category,
            createdBy: req.user._id,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.get("/products/:slug", formidable(), async (req, res) => {
    try {
        const { slug } = req.params;
        Category.findOne({ slug: slug })
            .select("_id type")
            .exec((error, category) => {
                if (error) {
                    return res.status(400).json({ error });
                }

                if (category) {
                    Product.find({ category: category._id }).exec((error, products) => {
                        if (error) {
                            return res.status(400).json({ error });
                        }

                        if (category.type) {
                            if (products.length > 0) {
                                res.status(200).json({
                                    products,
                                    priceRange: {
                                        under5k: 5000,
                                        under10k: 10000,
                                        under15k: 15000,
                                        under20k: 20000,
                                        under30k: 30000,
                                    },
                                    productsByPrice: {
                                        under5k: products.filter((product) => product.price <= 5000),
                                        under10k: products.filter(
                                            (product) => product.price > 5000 && product.price <= 10000
                                        ),
                                        under15k: products.filter(
                                            (product) => product.price > 10000 && product.price <= 15000
                                        ),
                                        under20k: products.filter(
                                            (product) => product.price > 15000 && product.price <= 20000
                                        ),
                                        under30k: products.filter(
                                            (product) => product.price > 20000 && product.price <= 30000
                                        ),
                                    },
                                });
                            }
                        } else {
                            res.status(200).json({ products });
                        }
                    });
                }
            });
    }

    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.post('/categories', async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all categories
router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find().populate('subcategories');
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new subcategory
router.post('/subcategories', async (req, res) => {
    try {
        const subcategory = new Subcategory(req.body);
        await subcategory.save();
        res.status(201).json(subcategory);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all subcategories
router.get('/subcategories', async (req, res) => {
    try {
        const subcategories = await Subcategory.find();
        res.json(subcategories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post('/vendors', async (req, res) => {
    try {
        const vendor = new Vendor(req.body);
        await vendor.save();
        res.status(201).json(vendor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all vendors
router.get('/vendors', async (req, res) => {
    try {
        const vendors = await Vendor.find();
        res.json(vendors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a specific vendor by ID
router.get('/vendors/:id', async (req, res) => {
    try {
        const vendor = await Vendor.findById(req.params.id);
        if (!vendor) {
            res.status(404).json({ error: 'Vendor not found' });
        } else {
            res.json(vendor);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a vendor by ID
router.put('/vendors/:id', async (req, res) => {
    try {
        const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!vendor) {
            res.status(404).json({ error: 'Vendor not found' });
        } else {
            res.json(vendor);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a vendor by ID
router.delete('/vendors/:id', async (req, res) => {
    try {
        const vendor = await Vendor.findByIdAndDelete(req.params.id);
        if (!vendor) {
            res.status(404).json({ error: 'Vendor not found' });
        } else {
            res.json({ message: 'Vendor deleted successfully' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
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
router.post('/addToCart', async (req, res) => {
    const { userID, productID, quantity } = req.body;

    try {
        const product = await Product.findById(productID);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        if (product.stock < quantity) {
            return res.status(400).json({ error: 'Insufficient stock' });
        }

        const vendor = await Vendor.findOne({ products: productID });

        if (vendor) {
            const updatedStock = product.stock - quantity;
            await Product.findByIdAndUpdate(productID, { stock: updatedStock });
        } else {
            return res.status(404).json({ error: 'Vendor not found for the product' });
        }

        const cartItem = { product: productID, quantity };
        await Cart.findOneAndUpdate({ userID }, { $push: { items: cartItem } }, { upsert: true });

        res.status(200).json({ message: 'Product added to cart successfully' });
    } catch (error) {
        console.error('Error adding to cart:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// API endpoint to remove items from the user's cart
router.post('/removeFromCart', async (req, res) => {
    const { userID, productID, quantity } = req.body;

    try {
        const cartItem = { product: productID, quantity };

        // Remove the item from the user's cart
        await Cart.findOneAndUpdate({ userID }, { $pull: { items: cartItem } });

        const vendor = await Vendor.findOne({ products: productID });

        if (vendor) {
            const product = await Product.findById(productID);

            if (product) {
                const updatedStock = product.stock + quantity;
                await Product.findByIdAndUpdate(productID, { stock: updatedStock });
            } else {
                return res.status(404).json({ error: 'Product not found' });
            }
        } else {
            return res.status(404).json({ error: 'Vendor not found for the product' });
        }

        res.status(200).json({ message: 'Product removed from cart successfully' });

    } catch (error) {
        console.error('Error removing from cart:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router

