import { useState, useEffect } from "react";

const ChatRoom_sidebar = function({username, room, socket}){
    const [roomUsers, setRoomUsers] = useState([]);
    useEffect(() => {
        socket.on('chatroom_users', (data) => {
            console.log(data);
            setRoomUsers(data);
        })

        return () => socket.off('chatroom_users');
    }, [socket])
    return(
    <div id="sidebar" class="bg-[#D7BCE8] p-6 w-1/4">
                <h1 class="text-4xl font-semibold mb-6">{room}</h1>
                <h2 class="text-lg font-semibold mb-4">People in {room}</h2>
                <ul id="user-list" class="space-y-2">
                    {roomUsers.map((user)=>(
                        <li class="flex items-center">
                        <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span>{user.username}</span>
                    </li>
                    ))}
                    
                    <li class="flex items-center">
                        <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span>User 2</span>
                    </li>
                </ul>
                <button class="rounded-md p-3 h-9 bg-red-500 text-justify">Leave</button>
            </div>
    )
};

export default ChatRoom_sidebar;