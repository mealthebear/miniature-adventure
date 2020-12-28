const User = require('./index.js');

// Get a single user

// Get users
const getAllUsers = () => {
  return User.find({});
};

// Create user
const createUser = (userInfo) => {
  let newUser = new User(userInfo);
  return newUser.save((err, user) => {
    if (err) return console.error(err);
    console.log(user);
  });
}

// Update user

const updateUser = (updatedInfo, existingUser) => {
  return User.findOneAndUpdate(updatedInfo, existingUser);
}

// Delete user
const deleteUser = (user) => {
  return User.findOneAndDelete(user);
}

module.exports = {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
};
