import mongoose from 'mongoose';

class User extends mongoose.Schema {
    constructor() {
        const user = super({
            name: String,
            password: String
        });

        user.pre('save',(next) =>  {
            console.log(user, ' is getting saved!');
            next();
        });
    }
}

export default mongoose.model('User', new User);