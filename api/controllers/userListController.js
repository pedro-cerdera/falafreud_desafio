'use strict';


var mongoose = require('mongoose'),
User = mongoose.model('Users');


/*
* Lista todos os usuários usado quando chamado /user com protocolo get
* conforme sugere o rest
*/
exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};



/*
* Cria um novo usuário. Usado quando chamado /user com protocolo post
* conforme sugere o rest
* @param name       nome do usuário
*/
exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

/*
* Obtem o usuário com um id específico. Usado quando chamado /user/:userId com protocolo get
* conforme sugere o rest
*/
exports.read_a_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

/*
* Atualiza um usuário de um id específico. Usado quando chamado /user/:userId com protocolo put
* conforme sugere o rest
* @param name         nome do usuário
*/
exports.update_a_user = function(req, res) {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

/*
* Deleta um usuário de um id específico. Usado quando chamado /user/:userId com protocolo delete
* conforme sugere o rest
* @param name         nome do usuário
*/
exports.delete_a_user = function(req, res) {
  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'Usuário deletado' });
  });
};

