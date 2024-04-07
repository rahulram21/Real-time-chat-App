const ChatRoom_input=function(){
    return(
        <div class="flex">
            <input class="flex-1 p-3 m-4 rounded-md mr-2 border border-gray-300" type="text" placeholder="Type your message here"></input>
            <button class="bg-blue-500 text-white p-3 h-16 rounded-md" id="send-button">Send</button>
        </div>
    )
}

export default ChatRoom_input;