import express from 'express';
import mongoose from 'mongoose';


/*
 * Initialize database connection
 * */
mongoose.connect('mongodb://localhost/es6Tuto', { server: { socketOptions: { keepAlive: 1 } } });


/*
 * Import app routes.
 * */
import routes from './routes';

const config = {
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
const app = express();

/*
* Instantiate all app routes.
* */
routes(app);

// listen on port config.port
app.listen(config.app_port, () => {
    console.info(`server started on port ${config.app_port}`); // eslint-disable-line no-console
});
