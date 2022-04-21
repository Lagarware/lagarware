import { useAuth0 } from '@auth0/auth0-react';
///import {LoginButton} from './login'
import {Profile} from './profile'
import {LogoutButton} from './logout'


//import './App.css';
import React from "react";
import './App.css';
import Navbar from "./components/Navbar/";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
//import SignUp from './pages/signup';
//import SignIn from './pages/signin';

function App() {
  const {isAuthenticated} = useAuth0()
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
     
    </Routes>
  </Router>
    <div className="App">
      <header className="App-header">
        
        {isAuthenticated ? <>
          <Profile/>
          <LogoutButton/>
        </>
        : <>
        <h2>dije todos</h2></>}
        
        
        
      </header>
    </div>
    </>
  );
}

export default App;
