import Header from "./Header";
import { useNavigate } from "react-router-dom";


const Login = function({username, setUsername, room, setRoom, socket}){
    const navigate = useNavigate();
    const joinRoom = () =>{
        if(room !== '' && username !== ''){
            socket.emit('join_room', {username, room});
        }
        navigate('./chat', { replace: true });
    }
    return(
        <div class="flex justify-center items-center h-screen bg-indigo-600">
            <div class="w-96 p-6 shadow-lg rounded-md bg-slate-300">
                <Header></Header>
                <form>
                <input type='text' placeholder='Username..' class="mt-3 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-grey-600 h-10 rounded-lg"
                onChange={(e) => setUsername(e.target.value)}/>

                <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-3"
                onChange={(e) => setRoom(e.target.value)}>
                    <option>---Select Room---</option>
                    <option value={'ghostroom'}>Ghost room</option>
                    <option value={'darkroom'}>Dark Room</option>
                    <option value={'mosquroom'}>Mosquroom</option>
                    <option value={'dharawi'}>Dharawi</option>
                    <option value={'publicroom'}>Rupublic</option>
                </select>
                <button onClick={joinRoom} class="mt-3 w-full bg-blue-900 border-2 rounded-md border-white hover:bg-transparent text-white hover:text-black text-xl" >Enter</button>
            </form>
        </div>
      </div>
    )
    
}

export default Login;