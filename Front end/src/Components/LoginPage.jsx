import Header from "./Header";
import { Link } from "react-router-dom";


const Login = function(){
    return(
        <div class="flex justify-center items-center h-screen bg-indigo-600">
            <div class="w-96 p-6 shadow-lg rounded-md bg-slate-300">
                <Header></Header>
                <form>
                <input type='text' placeholder='Username..' class="mt-3 border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-grey-600 h-10 rounded-lg"/>
                <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-3">
                <option>---Select Room---</option>
                <option value={'ghostroom'}>Ghost room</option>
                <option value={'darkroom'}>Dark Room</option>
                <option value={'mosquroom'}>Mosquroom</option>
                <option value={'dharawi'}>Dharawi</option>
                <option value={'publicroom'}>Rupublic</option>
                </select>
                <Link to="./chat"><button class="mt-3 w-full bg-blue-900 border-2 rounded-md border-white hover:bg-transparent text-white hover:text-black text-xl" >Enter</button></Link>
            </form>
        </div>
      </div>
    )
    
}

export default Login;