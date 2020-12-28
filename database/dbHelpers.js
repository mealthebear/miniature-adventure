const User = require('./index.js');

// Get a single user

const createUser = (userInfo) => {
  let newUser = new User(userInfo);
  return newUser.save((err, user) => {
    if (err) return console.error(err);
    console.log(user);
  });
}

const deleteUser = (user) => {
  return User.findOneAndDelete(user);
}

const getAllUsers = () => {
  return User.find({});
};

const updateUser = (updatedInfo, existingUser) => {
  return User.findOneAndUpdate(updatedInfo, existingUser);
}

module.exports = {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
};
