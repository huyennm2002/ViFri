import { query } from "express";
import sql from "../../config/sql.js";

const User = (user) => {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.last_name;
    this.password = user.last_name;
    this.dob = user.dob;
    this.phone = user.phone;
    this.avatar = user.avatar;
    this.address = user.address;
}

User.create = (newUser, result) => {
    let query = "INSERT INTO users SET ?"
    sql.query(query, newUser, (err, res)=> {
        if (err) {
            console.log("Failed to create new user: ", err);
            result(err, null);
            return;
        }
        result(null, res);
    })
}

User.get = (id, result) => {
    let query = `SELECT * FROM users WHERE id = ?`;
    sql.query(query, [id], (err, res) => {
        if (err) {
            console.log("Cannot update: ", err);
            result(err,null);
        } else {
            console.log("All users: ", res);
            result(null,res);
        }
    })
}

User.update = (updated_user, id, result) => {
    let query = `UPDATE users SET ? WHERE id = ?`;
    sql.query(query, [updated_user, id], (err, res) => {
        if (err) {
            console.log("Cannot update: ", err);
            result(err,null);
        } else {
            console.log("All users: ", res);
            result(null,res);
        }
    })
}

User.getFromEmail = (email) => {
    let query = `SELECT * FROM users WHERE email = ?`;
    sql.query(query, [email], (err, res) => {
        if (err) {
            console.log("Cannot update: ", err);
            throw err;
        } else {
            console.log("All users: ", res);
            return res;
        }
    })
}

export default User;
