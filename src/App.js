import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import './App.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Login from './Pages/Auth/Login'
import SignUp from './Pages/Auth/SignUp'
import ForgotPassword from './Pages/Auth/ForgotPassword'
import FAQ from './Pages/Extra/FAQ'
import PrivacyPolicy from './Pages/Extra/PrivacyPolicy'
import UserProfile from './Pages/User/UserProfile'
import About from './Pages/Extra/About'
import Clothing from './Pages/Products/Clothing'
import Books from './Pages/Products/books';
import Electronics from './Pages/Products/Electronics'
import Grocery from './Pages/Products/grocery'




const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/user/:activepage' element={<UserProfile />} />
        <Route path='/clothing' element={<Clothing />} />
      <Route path = '/books' element={<Books />} />
      <Route path = '/Electronics' element={<Electronics/>} />
      <Route path = '/Grocery' element={<Grocery/>} />

     

        <Route path="*" element={<div>
          <h1>404 Not Found</h1>
        </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App