const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/paytm");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  fullName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;