import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/user.js";
// import sql from "../services/db.js";


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
        console.log(data.length);
        if (err) res.status(500).send({message: "Internal Error"})
        if (data.length > 0) {
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
