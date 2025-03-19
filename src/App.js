import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import RegForm from './pages/RegForm.jsx';
import Home from './pages/Home'; 
import LikesPage from './pages/LikesPage.jsx';
import ChatPage from './pages/ChatPage.jsx';

import Login from './pages/login.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/chat/:userId" element={<ChatPage/>} />
        <Route path="/liked" element={<LikesPage/>} />
        <Route path="/" element={<Home/>} />
        
        <Route path='/RegForm'     element={<RegForm/>}/>
        <Route path='/login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;