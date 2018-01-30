import User from './users.server.model';

export default (app) => {
    app.route('/api').get((req, res) => {
        let user = new User({
            name: 'Sankarshan',
            password: '234'
        });
        user.save((err) => {
            if (err) {
                console.log(err);
                res.send('User not saved!');
            } else {
                res.send('User created successfully!!');
            }
        });

    });
};