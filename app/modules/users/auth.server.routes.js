export default (app) => {
    app.route('/auth').get((req, res) => {
        res.send('Auth routes working');
    });
};