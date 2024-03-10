import { useState } from 'react';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './Components/LoginPage';
import ChatRoomPage from './Components/ChatRoomPage';

// const router = createBrowserRouter([
//   { path : '/', element : <Login/>},
//   { path : '/chat', element : <ChatRoomPage />}
// ])


function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login username={username} setUsername={setUsername} room={room} setRoom={setRoom}/>} />
        <Route path='/chat' element={<ChatRoomPage username={username} room={room}/>} />
      </Routes>
    </Router>
  );
}

export default App;
