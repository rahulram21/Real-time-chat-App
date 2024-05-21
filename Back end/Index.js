
const express = require('express');
const app = express();
http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const CHAT_BOT = 'chatbot'

app.use(cors()); //cors middleware

const server = http.createServer(app);
app.get('/', (req, res)=>{
    res.send("Hello");
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
    
})

server.listen(4000, () => "Server is up and running on port 4000");
