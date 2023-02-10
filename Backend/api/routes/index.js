import todoRouter from './todo-routes.js';

// Here we mention all the routes from our parent URL
export default (app) => {
    app.use('/todo', todoRouter);
}