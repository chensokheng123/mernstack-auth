const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

userSchema.statics.findUser = async function (email, password) {
  const user = await User.find({ email, password });
  if (user) {
    return user;
  } else {
    return;
  }
};

const User = mongoose.model('ModelName', userSchema);

module.exports = User;
