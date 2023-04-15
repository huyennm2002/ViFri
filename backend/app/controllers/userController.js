import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/user.js";
import sql from "../models/db.js";


const hashPassword = (password) => {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    return hashedPassword;
}

const checkPassword = (password, User) => {
    const match = bcrypt.compareSync(password, User.password);
    return match;
}

export const createUser = (req, res) => {
    console.log(req);
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty"
        })
        return;
    }

    const newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hashPassword(req.body.password),
        dob: req.body.dob,
        phone: req.body.phone,
        avatar: req.body.avatar,
        address: req.body.address
    })

    User.create(newUser, (err, data) => {
        if (err) {
            return res.status(500).send({
                message: err.message || "An error has occured while creating new user"
            })
        } else {
            return res.status(200);
        }
    })
};

export const logIn = (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.getFromEmail(email);
        if (checkPassword(password)) {
            const token = jwt.sign(
                { user_id: user.id, email },
                process.env.TOKEN_KEY,
                { expiresIn: "2h" }
            )
            user.token = token;
            res.status(200).send(token);
        }
        res.status(401).send("Invalid Credentials");
    } catch(e) {
        console.log(e);
    }
}