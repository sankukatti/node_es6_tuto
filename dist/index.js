'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Initialize database connection
 * */
_mongoose2.default.connect('mongodb://localhost/es6Tuto', { server: { socketOptions: { keepAlive: 1 } } });

/*
 * Import app routes.
 * */


var config = {
    app_port: 8080
};

/*
* For iterating through files using a regex
* This will not work as dynaic imports are not supported.
* */
/*import glob from 'glob';

let files = glob.sync('app/!**!/!*.routes.js');
files = files.map((file) => {
    await import(file);
});*/

/*
* Instantiate express app
* */
var app = (0, _express2.default)();

/*
* Instantiate all app routes.
* */
(0, _routes2.default)(app);

// listen on port config.port
app.listen(config.app_port, function () {
    console.info('server started on port ' + config.app_port); // eslint-disable-line no-console
});