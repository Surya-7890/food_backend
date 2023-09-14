const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: '10d' });
}

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
}

module.exports = { createToken, hashPassword }