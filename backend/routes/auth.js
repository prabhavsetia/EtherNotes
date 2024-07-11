const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Create a user using: POST "/api/auth/createuser". No login Required
router.post('/createuser', [
    body('name', 'enter a valid name').isLength({ min: 3 }),
    body('email', 'enter a valid email').isEmail(),
    body('password', ' password must be atleast 8 characters').isLength({ min: 8 })]
    , async (req, res) => {
        //If there are errorsReturn bad request and errors
        const result = validationResult(req);
        try {
            if (!result.isEmpty()) {
                return res.send({ errors: result.array() });
            }
            //check wether the email exixts already
            let user = await User.findOne({ email: req.body.email });
            console.log(user);
            if (user) {
                return res.status(400).json({ error: 'User alredy exists' })
            }
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })
            res.json(user)
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Error Occured");
        }
    })

module.exports = router 
