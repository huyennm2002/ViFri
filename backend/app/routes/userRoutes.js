import app from "../../app.js";
import User from "../models/user.js";

app.post('/sign-up', User.createUser )