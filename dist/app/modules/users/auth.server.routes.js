'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (app) {
    app.route('/auth').get(function (req, res) {
        res.send('Auth routes working');
    });
};