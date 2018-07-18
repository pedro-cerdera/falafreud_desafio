'use strict';
module.exports = function(app) {
  var userList = require('../controllers/userListController');

  // userList Routes
  app.route('/user')
    .get(userList.list_all_users)
    .post(userList.create_a_user);


  app.route('/user/:userId')
    .get(userList.read_a_user)
    .put(userList.update_a_user)
    .delete(userList.delete_a_user);
};