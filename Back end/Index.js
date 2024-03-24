const express = require('express');
const app = express();
http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

app.use(cors()); //cors middleware

const server = http.createServer(app);
server.listen(4000, () => "Server is up and running");


//setup cors origin to bypass SOP. Origin is broswer nav
const io = new Server(server, {
    cors:{
        origin: 'http://localhost:3000',
        methods: ['GET','POST']
    }
})
/************/


io.on("connection", (socket) => {
    console.log(`User connected ${socket.id}`)
})
