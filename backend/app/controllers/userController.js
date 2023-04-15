import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/user.js";

const hashPassword = (password) => {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    return hashedPassword;
}

const checkPassword = (password, User) => {
    const match = bcrypt.compareSync(password, User.encrypted_password);
    return match;
}

export const createUser = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty"
        })
        return;
    }
    User.getFromEmail(req.body.email, (err,data) => {
        if (err) res.status(500).send({message: "Internal Error"})
        if (data.length > 0) {
            console.log(data);
            return res.status(409).send({message: "User already exist!"})
        }
        const newUser = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            encrypted_password: hashPassword(req.body.password),
            dob: req.body.dob,
            avatar: req.body.avatar,
        })
        User.create(newUser, (err, data) => {
            if (err) {
                return res.status(500).send({
                    message: err.message || "An error has occured while creating new user"
                })
            } else {
                return res.status(200).json(newUser);
            }
        })
    });
    
};

export const logIn = async (req, res) => {
    const { email, password } = req.body;
    User.getFromEmail(email, (err,user) => {
        if (err) res.status(500).send({message: "Internal Error"})
        if (!user) res.status(401).send({message: "User does not exist!"})
        if (checkPassword(password, user[0])) {
            const token = jwt.sign(
                { user_id: user.id, email },
                process.env.TOKEN_KEY,
                { expiresIn: "2h" }
            )
            return res.status(200).send(token);
        }
        return res.status(401).send("Invalid Credentials");
    });
}

// export const logOut = 

export const getUserInfo = (req, res) => {
    const { token } = req.headers;
    const user = jwt.verify(token, process.env.TOKEN_KEY);
    User.get(user_id, (err, data) => {
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