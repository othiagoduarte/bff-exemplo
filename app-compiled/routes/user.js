"use strict";

var _bluebird = require("bluebird");

module.exports = function (app) {
    var _this = this;

    var ctrl = app.controllers.user;

    app.post("/login", function () {
        var _ref = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee(req, res) {
            var R;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return ctrl.login(req, res);

                        case 2:
                            R = _context.sent;

                            res.status(R.status).jsonp(R.data);

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }());
};