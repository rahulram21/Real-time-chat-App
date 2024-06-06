require('dotenv').config();
const express = require('express');
const app = express();
http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const CHAT_BOT = 'chatbot'
const Message = require('./db');
const { default: mongoose } = require('mongoose');

//connect to mongoose
const dbUrl = process.env.MONGODB_URL;
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB connected !'))
.catch((err) => console.log(err))

app.use(cors()); //cors middleware

const server = http.createServer(app);
//trying out get request
app.get('/', (req, res)=>{
    res.send("Hello This is 4000");
})

let chatRoom = '';
let allUsers = [];


//setup cors origin to bypass SOP. Origin is local broswer host 
const io = new Server(server, {
    cors:{
        origin: 'http://localhost:3000',
        methods: ['GET','POST']
    }
})
/************/


io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`);

    socket.on('join_room', (data) => {
        const {username, room} = data; //data sent from client to server using socket.emit('join_room',data)
        socket.join(room); //join the client to the specified {room}
        
        let __createdTime__ = Date.now(); // timestamp
        chatRoom = room;
        allUsers.push({id: socket.id, username, room});
        //emit the message to client socket
        socket.to(room).emit('received_message', {
            message: `${username} has joined chat`,
            username: CHAT_BOT,
            __createdTime__
        });

        socket.emit('received_message', {
            message: `Welcome ${username}`,
            username: CHAT_BOT,
            __createdTime__
        });


    });

    socket.on('send_message', async (data) => {
        const {username, room, message, __createdTime__} = data;
        try{
            const newMessage = new Message({username, room, message, __createdTime__});
            const savedMessage = await newMessage.save();

            // emit message to all clients in the given room
            io.in(room).emit('received_message', savedMessage);
        }
        catch(err){
            console.log("Error saving message : ", err);
        }
        
    })
    
})

server.listen(4000, () => "Server is up and running on port 4000");
