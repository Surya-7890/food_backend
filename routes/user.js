const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { createToken, hashPassword } = require('../functions/auth')

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
  } catch (error) {
    
  }
});

router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    if (password.length < 8) {
      res.status(400).json({ message: 'Password should atleast be 8 characters long' });
    }
    const hashedPassword = await hashPassword(password);
    const user = await User.create({ username, password: hashedPassword() });
    const token = createToken(user._id);
    res.json(200).json({ message: 'Success', token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})