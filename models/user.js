const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Name Is Required']
  },
  password: {
    type: String
  }
})

module.exports = mongoose.model('User', UserSchema);