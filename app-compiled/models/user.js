'use strict';

var mongoose = require('mongoose');

module.exports = function () {

    var schema = mongoose.Schema({
        email: {
            type: String,
            required: true,
            index: { unique: true }
        },
        password: {
            type: String,
            required: true
        },
        perfil: {
            type: String,
            required: true
        }
    });

    var users = {};

    try {
        users = mongoose.model('users');
    } catch (error) {
        users = mongoose.model('users', schema);
    }

    return users;
};