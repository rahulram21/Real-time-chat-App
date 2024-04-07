const ChatRoom_sidebar = function(props){
    return(
    <div id="sidebar" class="bg-[#D7BCE8] p-6 w-1/4">
                <h1 class="text-4xl font-semibold mb-6">{props.room}</h1>
                <h2 class="text-lg font-semibold mb-4">People in {props.room}</h2>
                <ul id="user-list" class="space-y-2">
                    <li class="flex items-center">
                        <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span>{props.username}</span>
                    </li>
                    <li class="flex items-center">
                        <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span>User 2</span>
                    </li>
                </ul>
            </div>
    )
};

export default ChatRoom_sidebar;