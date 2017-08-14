'use strict';

var mongoose = require('mongoose');

module.exports = function () {

    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        id_usuario: {
            type: String,
            required: true
        }
    });
    return mongoose.model('Contatos', schema);
};