import { useState, useEffect } from "react";

const ChatRoom_message = function({socket}){

        const[messageReceived, setMessageReceived] = useState([]);

        useEffect(() => {
            socket.on('received_message', (data)=>{
                console.log(data);
                setMessageReceived((state) => [
                    ...state,
                    {
                        message: data.message,
                        username: data.username,
                        timestamp: data.__createdTime__
                    }
                ])
            })
            return () => socket.off('received_message');
        }, [socket]);

        // Socket event handled by useEffect to get and display all the previous messages in the database
        useEffect(() => {
            socket.on('get_message', (lastMessages) => {
                console.log('Last messages in room', JSON.parse(lastMessages));
                lastMessages = JSON.parse(lastMessages);
                lastMessages = sortMessagesByDate(lastMessages);
                setMessageReceived((state) => [...lastMessages, ...state]);
            })
            return () => socket.off('get_message');
        }, [socket])
        
        const formatDateFromTimestamp = (timestamp) =>{
            const date = new Date(timestamp);
            return date.toLocaleDateString();
        }
        // sorting messages function
        function sortMessagesByDate(data){
            return data.sort(
                (a, b) => parseInt(a.__createdTime__) - parseInt(b.__createdTime__)
            )
        };


    return(
        <div class="bg-[#FDE2FF] h-80 mb-4 overflow-y-auto p-4 rounded-md" id="messages">
                    {/* chat messages are displayed here */}
                    
            {messageReceived.map((msg, i) => (
                <div class="mb-2 flex items-center" key={i}>
                    <div class="w-6 h-6 bg-blue-500 rounded-full mr-2">{msg.username}</div>
                    <div class="bg-gray-100 p-3 rounded-md">
                        <p class="text-sm">{msg.message}</p>
                        <p class="text-sm">{msg.__createdTime__}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default ChatRoom_message;