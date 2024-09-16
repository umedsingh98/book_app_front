import React from 'react';
import Home from './home/Home.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import ExploreMore from './ExploreMore/ExploreMore.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import ContactUs from './components/ContactUs.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About.jsx';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx';

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/explore' element={authUser? <ExploreMore /> : <Navigate to="/login" />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
    </Routes>
    <Toaster />
    </div>
    </>
  )
}

export default App;