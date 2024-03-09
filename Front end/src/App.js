
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/LoginPage';
import ChatRoomPage from './Components/ChatRoomPage';

const router = createBrowserRouter([
  { path : '/', element : <Login/>},
  { path : '/chat', element : <ChatRoomPage />}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
