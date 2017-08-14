"use strict";

var _bluebird = require("bluebird");

var _ = require('underscore');
module.exports = function (app) {
    var login = function () {
        var _ref = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee(req, res) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            return _context.abrupt("return", R.sucesso("teste 123"));

                        case 4:
                            _context.prev = 4;
                            _context.t0 = _context["catch"](0);
                            return _context.abrupt("return", R.erroServidor(_context.t0));

                        case 7:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this, [[0, 4]]);
        }));

        return function login(_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }();

    var R = app.builder.retorno;

    return { login: login };
};