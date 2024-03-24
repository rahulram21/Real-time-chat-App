 const ChatRoomPage = function({username, room}){
    return(
        <div class="flex gap-2 p-4 bg-[#8884FF] justify-center h-screen">
            <div id="sidebar" class="bg-[#D7BCE8] p-6 w-1/4">
                <h2 class="text-lg font-semibold mb-4">People in Chat Room</h2>
                <ul id="user-list" class="space-y-2">
                    <li class="flex items-center">
                        <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span>{username}</span>
                    </li>
                    <li class="flex items-center">
                        <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span>User 2</span>
                    </li>
                </ul>
            </div>
            <div id="chat-area" class="flex bg-[#BAA7F1] basis-3/4 flex-col p-6">
                <h1 class="text-4xl font-semibold mb-6">{room}</h1>
                <div class="bg-[#FDE2FF] h-80 mb-4 overflow-y-auto p-4 rounded-md" id="messages">
                    {/* chat messages are displayed here */}
                    <div class="mb-2 flex items-center">
                        <div class="w-6 h-6 bg-blue-500 rounded-full mr-2"></div>
                            <div class="bg-gray-100 p-3 rounded-md">
                                <p class="text-sm">John Doe: Hello!</p>
                            </div>
                        </div>
                    <div class="mb-2 flex items-center">
                            <div class="w-6 h-6 bg-blue-500 rounded-full mr-2"></div>
                            <div class="bg-gray-100 p-3 rounded-md">
                                <p class="text-sm">Jane Smith: Hi there!</p>
                            </div>
                        </div>
                </div>
                <div class="flex">
                    <input class="flex-1 p-3 m-4 rounded-md mr-2 border border-gray-300" type="text" placeholder="Type your message here"></input>
                    <button class="bg-blue-500 text-white p-3 h-16 rounded-md" id="send-button">Send</button>
                </div>
            </div>
        </div>
    )
 }

 export default ChatRoomPage;