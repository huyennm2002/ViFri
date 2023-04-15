import app from "../../app.js";
import User from "../models/user.js";

app.post('/sign-up', (req, res) => {
    console.log(req);
    User.createUser(req, res)})