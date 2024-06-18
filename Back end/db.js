
const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        room: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        __createdTime__: {
            type: Date,
            default: Date.now,
            required: false
        }
    }
)

const messageModel = mongoose.model("Messages", MessageSchema);

module.exports = messageModel;




















//FQT3HWovnlKsS0U9 - cluster password luhar270698 - username
//connection string - mongodb+srv://luhar270698:FQT3HWovnlKsS0U9@cluster0.ag6bp3q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0