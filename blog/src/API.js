
import React, { useState } from 'react';
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Users from './Users'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import './App.css';
function App() {
    return (
        <div className="App">
            <Router>

                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link ><Link to="/Home">Home</Link></Nav.Link>
                        <Nav.Link ><Link to="/About">About</Link></Nav.Link>
                        <Nav.Link ><Link to="/Contact">Contact</Link></Nav.Link>
                        <Nav.Link ><Link to="/Users">Users</Link></Nav.Link>

                    </Nav>
                </Navbar>

                <Routes>
                    <Route path="/About" element={<About />} ></Route>
                    <Route path="/Contact" element={<Contact />} ></Route>
                    <Route path="/Home" element={<Home />} ></Route>
                    <Route path="/Users" element={<Users />} ></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;