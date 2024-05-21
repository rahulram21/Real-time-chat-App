import { useState } from 'react';
import { RouterProvider, createRoutesFromElements, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './Components/LoginPage';
import ChatRoomPage from './Components/ChatRoomPage';
import io from 'socket.io-client';

//server will run on Port 4000
const socket = io.connect('http://localhost:4000');

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  return (
    <Router>
      <Routes>
        <Route path='/'
         element={<Login username={username} setUsername={setUsername} room={room} setRoom={setRoom} socket={socket}/>} />
        <Route path='/chat'
         element={<ChatRoomPage username={username} room={room} socket={socket}/>} />
      </Routes>
    </Router>
  );
}

export default App;
