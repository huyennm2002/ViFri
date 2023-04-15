import Item from "../models/item.js";
import jwt from 'jsonwebtoken';

export const addItem = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty"
        })
        return;
    }

    const { token } = req.headers;
    const user = jwt.verify(token, process.env.TOKEN_KEY);
    console.log(user);
    const newItem = new Item({
        barcode: req.body.barcode,
        name: req.body.name,
        expiration: req.body.expiration,
        image: req.body.image,
        servings: req.body.servings,
        is_active: 1,
        user_id: user.user_id
    })

    Item.create(newItem, (err, data) => {
        if (err) {
            return res.status(500).send({
                message: "An error has occured"
            })
        } else {
            return res.status(200).json(newItem);
        }
    })
}

export const getItemInfo = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Content cannot be empty"
        });
    }
    const { id } = req.query;
    Item.get(id, (err, data) => {
        if (err) {
            return res.status(500).send({
                message: "An error has occured"
            })
        }
        return res.status(200).json(data[0]);
    })
}

export const updateItemInfo = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Content cannot be empty"
        });
    }
    
    const updatedInfo = req.body;

    Item.update(updatedInfo, updatedInfo.id, (err, data) => {
        if (err) return res.status(500).send({message: "An error has occured"});
        return res.status(200).send(updatedInfo);
    })
}

export const deleteItem = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Content cannot be empty"
        });
    }
    
    const { id } = req.params;
    Item.delete(id, (err, data) => {
        if (err) return res.status(500).send({message: "An error has occured"});
        return res.status(200).send({ message: "Successfully removed" });
    })
}