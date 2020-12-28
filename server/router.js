const router = require('express').Router();
const {
  createUserController,
  deleteUserController,
  getAllUsersController,
  updateUserController,
} = require('./controller.js');

router.route('/users')
  .delete(deleteUserController)
  .get(getAllUsersController)
  .post(createUserController)
  .put(updateUserController)

module.exports = router;
