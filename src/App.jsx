import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import Home from "./pages/Home";
import SignOut from "./pages/SignUp";
import Profile from "./pages/Profile";
import About from "./pages/About";
import SignIn from "./pages/Signin";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element = {<Home />}></Route>
        <Route path="/signin" element = {<SignIn />}></Route>
        <Route path="/signup" element = {<SignOut />}></Route>
        <Route path="/about" element = {<About />}></Route>
        <Route path="/profile" element = {<Profile />}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App