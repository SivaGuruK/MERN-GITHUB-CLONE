import { Route, Routes } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import HomePage from './pages/HomePage';
import LikesPage from './pages/LikesPage';
import ExplorePage from './pages/ExplorePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import Sidebar from './components/Sidebar';
function App(){
  return (
    <div className="flex">
      <Sidebar />
      <div className='max-wd-5xl my-5 text-white mx-auto transition-all duration-300 felx-1'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/likes" element={<LikesPage />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App
