import express from "express";

import User from "../model/user.js";
import Conversation from "../model/conversation.js";
import Messages from "../model/message.js";


const route = express.Router();


route.post('/add', async (req, res) => {
    try {
        const exist = await User.findOne({ sub: req.body.sub });
        if (exist) {
            return res.status(200).json({ msg: "User already exist" })
        } else {
            const newUser = new User(req.body);
            await newUser.save();
            return res.status(200).json(newUser);
        }

    } catch (error) {
        return res.status(500).json(error.message);
    }
})

route.get('/getUser', async (req, res) => {
    try {
        const allUser = await User.find();
        return res.status(200).json(allUser);
    } catch (error) {
        return res.status(500).json(error.message);
    }
})

route.post('/conversation/add', async (req, res) => {
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;
        const exist = await Conversation.findOne({ members: { $all: [senderId, receiverId] } })


        if (exist) {
            return res.status(200).json("Conversation already exist");
        } else {
            const newConversation = new Conversation({
                members: [senderId, receiverId]
            })
            newConversation.save();
            return res.status(200).json({ msg: "Conversation add Succcefuly" });
        }

    } catch (error) {
        return res.status(500).json(error.message);
    }
})

route.post('/conversation/get', async (req, res) => {

    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;
        const conversationId = await Conversation.findOne({ members: { $all: [senderId, receiverId] } })

        return res.status(200).json(conversationId);
    } catch (error) {
        return res.status(500).json(error.message);
    }
})

route.post('/messages/add', async (req, res) => {
    try {
        const addMsg = new Messages(req.body)
        await addMsg.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId, { message: req.body.text });

        res.status(200).json('message has added successfully');
    } catch (error) {
        return res.status(500).json(error.message);
    }
})

route.get('/messages/get/:id', async (req, res) => {
    try {
        const allMsg = await Messages.find({ conversationId: req.params.id })
        return res.status(200).json(allMsg);
    } catch (error) {
        return res.status(500).json(error.message);
    }
})















export default route;
