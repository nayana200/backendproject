var jwt = require('jsonwebtoken');
require("dotenv").config()
const verifyToken = (req, res, next) => {

    const usertoken = req.header('Authorization');
    if (!usertoken) {
        return res.status(403).send("A valid token is required to visit this url!!")
    }

    try {
        let verify_token = jwt.verify(usertoken, process.env.TOKEN_KEY)
        req.user = verify_token;
    }
    catch {
        return res.status(403).send("check token key!!")
    }

    return next()

}

module.exports = verifyToken