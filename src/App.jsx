import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import Home from "./pages/Home";
import SignOut from "./pages/SignUp";
import Profile from "./pages/Profile";
import About from "./pages/About";
import SignIn from "./pages/Signin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />}></Route>
        <Route path="/sign-in" element = {<SignIn />}></Route>
        <Route path="/sign-up" element = {<SignOut />}></Route>
        <Route path="/about" element = {<About />}></Route>
        <Route path="/profile" element = {<Profile />}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App