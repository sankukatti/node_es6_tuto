'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _usersServer = require('./app/modules/users/users.server.routes');

var _usersServer2 = _interopRequireDefault(_usersServer);

var _authServer = require('./app/modules/users/auth.server.routes');

var _authServer2 = _interopRequireDefault(_authServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
    (0, _usersServer2.default)(app);
    (0, _authServer2.default)(app);
};