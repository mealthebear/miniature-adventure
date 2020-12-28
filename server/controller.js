const { 
  createUser, 
  deleteUser, 
  getAllUsers, 
  updateUser,
} = require('../database/dbHelpers.js');

const createUserController = (req, res) => {
  console.log(req.data);
  console.log(req.params);
  console.log(req.body);
  createUser()
  .then((data) => {
    res.status(201).send(data)
  })
  .catch((err) => {
    res.status(401).send(err);
  });
}

const deleteUserController = (req, res) => {
  console.log(req.data);
  console.log(req.params);
  console.log(req.body);
  deleteUser()
  .then((data) => {
    res.status(200).send(data)
  })
  .catch((err) => {
    res.status(400).send(err)
  });
}

const getAllUsersController = (req, res) => {
  console.log(req.data);
  console.log(req.params);
  console.log(req.body);
  getAllUsers()
  .then((data) => {
    res.status(200).send(data)
  })
  .catch((err) => {
    res.status(400).send(err)
  });
}

const updateUserController = (req, res) => {
  console.log(req.data);
  console.log(req.params);
  console.log(req.body);
  updateUser()
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
