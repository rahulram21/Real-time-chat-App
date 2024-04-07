const ChatRoom_message=function(){
    return(
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
    )
}

export default ChatRoom_message;