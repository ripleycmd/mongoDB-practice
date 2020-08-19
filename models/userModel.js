const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const user = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: Number, required: false },
});

module.exports = model('users', user);
