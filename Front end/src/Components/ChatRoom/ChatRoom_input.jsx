import { useState } from "react";
const ChatRoom_input = function({socket, username, room}){

    const [message, setMessage] = useState('');

    const sent_message = () => {
        if(message !== ' '){
            const __createdTime__ = Date.now();
            socket.emit('send_message', { username, room, message, __createdTime__});
            setMessage();
        }
    };

    return(
        <div class="flex">
            <input class="flex-1 p-3 m-4 rounded-md mr-2 border border-gray-300"
             type="text"
            placeholder="Type your message here"
            onChange={(e) => setMessage(e.target.value)}
            value={message}></input>
            <button class="bg-blue-500 text-white p-3 h-16 rounded-md" id="send-button" onClick={sent_message}>Send</button>
        </div>
    )
}

export default ChatRoom_input;