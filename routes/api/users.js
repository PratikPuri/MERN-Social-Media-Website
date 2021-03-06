const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
//const res = require('express/lib/response');
const User = require('../../models/Users');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const config = require('config');

router.post('/', [
    check ('name','Name required').not().isEmpty(),
    check ('email','Invalid email').isEmail(),
    check ('password','Password characters should be greater than 6').isLength({min:6})
],async (req,res)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {name, email, password} = req.body
    
    try {
        let user = await User.findOne({email});
        if (user)
        {
            return res.status(400).json({errors: [{msg:'User already exists'}]})
        }
        const avatar = gravatar.url(email, {s:200,r:'pg',d:'mm'})
        user = new User({name,email,password,avatar})
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);
        await user.save();
        const payload ={user:{id:user.id}}
        jwt.sign(payload,
            config.get('jwtSecret'),
            {expiresIn: 360000},
            (err,token) => {
                if (err) throw err; 
                res.json({token})});
        // res.send(jwt);
        // res.send("User registered")
    }
    catch (err){
        console.log(err)
        return res.status(500).send("Server Error");
    }
    })

module.exports = router;