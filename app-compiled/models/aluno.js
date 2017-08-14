'use strict';

var mongoose = require('mongoose');

module.exports = function () {
    return mongoose.model('Alunos', mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        matricula: {
            type: String,
            required: true,
            index: { unique: true }
        },
        email: {
            type: String,
            required: true
        },
        apresentacao: {
            type: String
        },
        curso: {
            type: {}
        },
        user: {
            type: {},
            required: true
        },
        orientador: {}
    }));
};