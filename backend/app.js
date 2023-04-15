import express from 'express';
import cors from "cors"
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import sql from './config/sql.js';
import * as Auth from './app/controllers/authController.js'
import * as User from './app/controllers/usersController.js';
import * as Item from './app/controllers/itemsController.js';

dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extende: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//auth
app.post('/sign-up', (req, res) => Auth.createUser(req, res));
app.post('/log-in', (req, res) => Auth.logIn(req, res));
app.post('/log-out', (req, res) => Auth.logOut(req,res));

//user
app.get('/users', (req, res) => User.getUserInfo(req, res));
app.put('/users', (req, res) => User.updateUserInfo(req, res));
app.get('/users/:id/items', (req, res) => User.getItemList(req, res));

//item
app.post('/items', (req, res) => Item.addItem(req, res));
app.get('/items', (req, res) => Item.getItemInfo(req, res))
app.put('/items', (req, res) => Item.updateItemInfo(req, res))
app.delete('/items', (req, res) => Item.deleteItem(req, res))

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

export default app;