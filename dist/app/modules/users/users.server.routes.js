'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _usersServer = require('./users.server.model');

var _usersServer2 = _interopRequireDefault(_usersServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
    app.route('/api').get(function (req, res) {
        var user = new _usersServer2.default({
            name: 'Sankarshan',
            password: '234'
        });
        user.save(function (err) {
            if (err) {
                console.log(err);
                res.send('User not saved!');
            } else {
                res.send('User created successfully!!');
            }
        });
    });
};