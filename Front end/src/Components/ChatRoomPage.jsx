import ChatRoom_input from "./ChatRoom/ChatRoom_input";
import ChatRoom_message from "./ChatRoom/ChatRoom_message";
import ChatRoom_sidebar from "./ChatRoom/ChatRoom_sidebar";

 const ChatRoomPage = function({username, room, socket}){
    return(
        <div class="flex gap-2 p-4 bg-[#8884FF] justify-center h-screen">
            {/* <ChatRoom_sidebar username={username} room={room} /> */}
            <div id="chat-area" class="flex bg-[#BAA7F1] basis-3/4 flex-col p-6">
                <ChatRoom_message socket={socket}/>
                <ChatRoom_input socket={socket} username={username} room={room}/>
            </div>
        </div>
    )
 }

 export default ChatRoomPage;