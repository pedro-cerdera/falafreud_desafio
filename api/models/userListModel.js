'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
* Schema para criar o link com o banco de dados.
*
*/
var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Insira o nome do usuário'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Users', UserSchema);