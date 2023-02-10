import mongoose from 'mongoose';
import debug from 'debug';
import cors from 'cors';
import models from './models/index.js';
import routes from './routes/index.js'
import express from 'express';

// Initialise our app by creating express object
const app = express();
// To parse JSON we use express.json
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Initialise the routes
routes(app);
// Establish the connection with DB
mongoose.connect('mongodb://localhost:27017/tododb');

export default app;