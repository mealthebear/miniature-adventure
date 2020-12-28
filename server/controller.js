const { 
  createUser, 
  deleteUser, 
  getAllUsers, 
  updateUser,
} = require('../database/dbHelpers.js');

const createUserController = (req, res) => {
  return Promise.resolve(createUser(req.body)
  .then((data) => {
    res.status(201).send(data)
  })
  .catch((err) => {
    res.status(401).send(err);
  }));
}

const deleteUserController = (req, res) => {
  console.log(req.body);
  deleteUser(req.body)
  .then((data) => {
    res.status(200).send(data)
  })
  .catch((err) => {
    res.status(400).send(err)
  });
}

const getAllUsersController = (req, res) => {
  getAllUsers()
  .then((data) => {
    res.status(200).send(data)
  })
  .catch((err) => {
    res.status(400).send(err)
  });
}

const updateUserController = (req, res) => {
  console.log(req.body);
  const updatedInfo = { name: req.body.newName, age: req.body.newAge};
  const existingInfo = { name: req.body.name };
  updateUser(updatedInfo, existingInfo)
  .then((data) => {
    res.status(200).send(data)
  })
  .catch((err) => {
    res.status(400).send(err)
  });
}

module.exports = {
  createUserController,
  deleteUserController,
  getAllUsersController,
  updateUserController,
};
