const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true, index: true }, 
  email: { type: String, required: true, unique: true, index: true },
  address: {
    city: { type: String },
    state: { type: String },
    country: { type: String },
    pin: { type: String },
  },
});

 // userSchema.index( { email: 1 } ) //? index on email (another way);

 userSchema.index({ 'address.country': 1 }) //? index on country on nested schema 
 userSchema.index({ 'address.state': 1 }) //? index on country on nested schema 

//! compound indexes
userSchema.index({ state: 1, country: 1 }, { unique: true, });

module.exports = mongoose.model( "User", userSchema );