const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/Auth');
const Post = require('../../models/Post');
const User = require('../../models/Users');

router.post('/', auth, check('text', 'Text is required').notEmpty(), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select('-password');
      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        user: req.user.id
      });

      const post = await newPost.save();
      res.json(post);
    } catch (err) {
      res.status(500).send('Server Error');
    }
  }
);

router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date:-1 });
    res.json(posts);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.put('/like/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.likes.some((like) => like.user.toString() === req.user.id)) {
        post.likes = post.likes.filter(({ user }) => user.toString() !== req.user.id);
        await post.save();
        return res.json(post.likes);
    }
    post.likes.unshift({ user: req.user.id });
    await post.save();
    return res.json(post.likes);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.post('/comment/:id',auth, check('text', 'Text is required').notEmpty(), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select('-password');
      const post = await Post.findById(req.params.id);
      const newComment = {
        text: req.body.text,
        name: user.name,
        user: req.user.id
      };
      post.comments.unshift(newComment);
      await post.save();
      res.json(post.comments);
    } catch (err) {
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;