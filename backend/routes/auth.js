const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Create a user using: POST "/api/auth". Dosent require auth
router.post('/', [
    body('name', 'enter a valid name').isLength({ min: 3 }),
    body('email', 'enter a valid email').isEmail(),
    body('password', ' password must be atleast 8 characters').isLength({ min: 8 })]
    , async (req, res) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.send({ errors: result.array() });
        }
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }).then(user =>res.json(user))
        .catch(err=> {console.log(err)
            res.json({error: 'User is alredy registered',message: err.message})
        })
    })

module.exports = router 
