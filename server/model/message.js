import mongoose from "mongoose";


const messagesSchema = mongoose.Schema({
    conversationId: {
        type: String
    },
    receiverId: {
        type: String
    },
    senderId: {
        type: String
    },
    text: {
        type: String
    },
    type: {
        type: String
    }
}, {
    timestamps: true
})


const Messages = mongoose.model('messages', messagesSchema)

export default Messages 