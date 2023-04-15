import { query } from "express";
import sql from "../../config/sql.js";


const Item = function(item) {
    this.barcode = item.barcode;
    this.name = item.name;
    this.expiration = item.expiration;
    this.image = item.image;
    this.servings = item.servings;
    this.user_id = item.user_id;
}

Item.create = (newItem, result) => {
    let query = "INSERT INTO items SET ?"
    sql.query(query, newItem, (err, res)=> {
        if (err) {
            console.log("Failed to create add new item: ", err);
            result(err, null);
            return;
        }
        result(null, res);
        return;
    })
}

Item.get = (id, result) => {
    let query = `SELECT * FROM items WHERE id = ?`;
    sql.query(query, [id], (err, res) => {
        if (err) {
            console.log("Cannot get: ", err);
            result(err,null);
        } else {
            console.log("Item: ", res);
            result(null,res);
        }
    })
}

Item.getList = (user_id, result) => {
    let query = `SELECT * FROM items WHERE user_id = ?`;
    sql.query(query, [user_id], (err, res) => {
        if (err) {
            console.log("Cannot get all items: ", err);
            result(err,null);
        } else {
            console.log("User: ", res);
            result(null,res);
        }
    })
}

Item.update = (updated_info, id, result) => {
    let query = `UPDATE items SET ? WHERE id = ?`;
    sql.query(query, [updated_info, id], (err, res) => {
        if (err) {
            console.log("Cannot update: ", err);
            result(err,null);
        } else {
            console.log("Updated: ", res);
            result(null,res);
        }
    })
}

Item.delete = (id, result) => {
    let query = `DELETE FROM items WHERE id = ?`;
    sql.query(query, [id], (err, res) => {
        if (err) {
            console.log("Cannot delete");
            result(err,null);
        } else {
            result(null,res);
        }
    })
}

export default Item;