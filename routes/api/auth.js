const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const User = require('../../models/Users');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middleware/Auth');

router.get('/', auth, async (req,res)=>{
    try{
        return res.json( await User.findById(req.user.id).select('-password'))
    }
    catch(err){return res.status(500).json('Server Error')}})

router.post('/', [
    check ('email','Invalid email').isEmail(),
    check ('password','Please enter password').not().isEmpty()],
    async (req,res)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {email, password} = req.body
    
    try {
        let user = await User.findOne({email});
        if (!user)
        {
            return res.status(400).json({errors: [{msg:'Invalid credentials'}]})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch){
            return res.status(400).json({errors: [{msg:'Invalid credentials'}]})
        }
        const payload ={user:{id:user.id}}
        jwt.sign(payload,
            config.get('jwtSecret'),
            {expiresIn: 360000},
            (err,token) => {
                if (err) throw err; 
                return res.json({token})});
    }
    catch (err){
        console.log(err)
        return res.status(500).send("Server Error");
    }
    })

module.exports = router;