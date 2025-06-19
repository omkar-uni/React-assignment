import React from "react";
import "./App.css"; // Assuming you have a CSS file for global styles
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
        <div className="h-screen w-full bg-[#F7F8F9] ">
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Profile/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App