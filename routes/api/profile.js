// const axios = require('axios');
// const config = require('config');
const auth = require('../../middleware/Auth');
const express = require('express');
const router = express.Router();
const Profile = require('../../models/Profile');
const User = require('../../models/Users');
const normalize = require('normalize-url');

router.get('/me', auth, async (req,res)=> {
    try{
        const profile = await Profile.findOne({user:req.user.id}).populate('user','name');
        if (!profile){
            return res.status(400).json({msg: "User profile unavailable"})
        }
        res.json(profile);
    }
    catch(err){
        res.status(500).json({Errors: {msg: 'server error'}})
    }
});

router.get('/', auth, async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user','name');
        res.json(profiles);
    } catch (err) {
        console.log(err.message)
        res.status(500).json({Errors: {msg: 'server error'}})
    }   
  });
  
router.post( '/', auth, async (req, res) => {
    const profileFields = {
        user: req.user.id,
        youtube: req.body.youtube && req.body.youtube !== '' ? normalize(req.body.youtube, { forceHttps: true }) : '',
        twitter: req.body.twitter && req.body.twitter !== '' ? normalize(req.body.twitter, { forceHttps: true }) : '',
        instagram: req.body.instagram && req.body.instagram !== '' ? normalize(req.body.instagram, { forceHttps: true }) : '',
        linkedin: req.body.linkedin && req.body.linkedin !== '' ? normalize(req.body.linkedin, { forceHttps: true }) : '',
        facebook: req.body.facebook && req.body.facebook !== '' ? normalize(req.body.facebook, { forceHttps: true }) : '',
        interests: Array.isArray(req.body.interests) ? req.body.interests : req.body.interests.split(',').map((interest) => ' ' + interest.trim()),
        company: req.body.company,
        location: req.body.location,
        about: req.body.about,
        birthDate: req.body.birthDate,
    };

    try {
      let profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true}
      );
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);

router.get('/user/:user_id',auth,async (req, res) => {
    try {
      const profile = await Profile.findOne({user: req.params.user_id}).populate('user', 'name');
      if (!profile) return res.status(400).json({ msg: 'Profile not found' });
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ msg: 'Server error' });
    }
  }
);

module.exports = router;