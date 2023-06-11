import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/user.js";
import Item from '../models/item.js';


export const getUserInfo = (req, res) => {
    const { token } = req.headers;
    const user = jwt.verify(token, process.env.TOKEN_KEY);
    User.get(user.user_id, (err, data) => {
        if (err) {
            return res.status(500).send({message: "Cannot retrieve user info"})
        }
        const result = {
            id: data[0].id,
            first_name: data[0].first_name,
            last_name: data[0].last_name,
            email: data[0].email,
            avatar: data[0].avatar
        }
        return res.status(200).json(result);
    })
}

export const updateUserInfo = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Content cannot be empty"
        })
    }
    const { token } = req.headers;
    const user = jwt.verify(token, process.env.TOKEN_KEY);
    let userId = user.user_id
    let updatedInfo = req.body;

    User.update(updatedInfo, userId, (err, data) => {
        if (err) {
            return res.status(500).send({
                message: err.message || "An error has occured while creating new user"
            })
        } else {
            return res.send(data);
        }
    })
}

export const getItemList = (req, res) => {
    const { token } = req.headers;
    const user = jwt.verify(token, process.env.TOKEN_KEY);

    Item.get(user.user_id, (err, data) => {
        if (err) {
            return res.status(500).send({
                message: "An error has occured"
            })
        }
        return res.status(200).json(data);
    })
}

export const getReminderList = (req, res) => {
    const { token } = req.headers;
    
    const user = jwt.verify(token, process.env.TOKEN_KEY);
    Item.getReminder(user.user_id, (err, data) => {
        if (err) {
            return res.status(500).send({
                message: "An error has occured"
            })
        }
        return res.status(200).json(data);
    })
}