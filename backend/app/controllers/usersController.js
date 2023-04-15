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
        return res.status(200).json(data[0]);
    })
}

// export const updateUserInfo = (req, res) => {
//     if (!req.body) {
//         return res.status(400).send({
//             message: "Content cannot be empty"
//         })
//     }
//     console.log(req.headers);
//     // const { token } = req.header;
//     // const user = jwt.verify(token, process.env.TOKEN_KEY);
//     // let userId = user.id
//     let updatedInfo = req.body;
//     let userId = req.headers.user_id;
//     console.log(userId);

//     if (!userId) {
//         User.getFromEmail(updatedInfo.email, (err, result) => {
//             if (err) {
//                 return res.status(500).send({
//                     message: err.message
//                 });
//             }
//             if (result.length > 0) {
//                 if (updatedInfo.password) {
//                     updatedInfo.encrypted_password = hashPassword(updatedInfo.password);
//                 }
//                 userId = result[0].id;
//                 User.update(updatedInfo, userId, (err, data) => {
//                     if (err) {
//                         return res.status(500).send({
//                             message: err.message || "An error has occured while updating new user"
//                         })
//                     } else {
//                         return res.send(data);
//                     }
//                 })
//             }
//         })
//     } else {
//         User.update(updatedInfo, userId, (err, data) => {
//             if (err) {
//                 return res.status(500).send({
//                     message: err.message || "An error has occured while creating new user"
//                 })
//             } else {
//                 return res.send(data);
//             }
//         })
//     }
//     User.get(userId, (err, result) => {
//         console.log(result);
//     })
// }

export const getItemList = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Content cannot be empty"
        });
    }

    const { token } = req.headers;
    const user = jwt.verify(token, process.env.TOKEN_KEY);

    Item.get(user_id, (err, data) => {
        if (err) {
            return res.status(500).send({
                message: "An error has occured"
            })
        }
        return res.status(200).json(data);
    })
}