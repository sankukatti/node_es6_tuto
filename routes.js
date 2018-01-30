import userRoutes from './app/modules/users/users.server.routes';
import authRoutes from './app/modules/users/auth.server.routes';

export default (app) => {
    userRoutes(app);
    authRoutes(app);
};