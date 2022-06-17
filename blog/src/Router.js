import React, {useState} from "react";
import About from './About'
import Contact from './Contact'
import {Link,Route, BrowserRouter as Router} from "react-router-dom"
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import './App.css'

function App() {
    return(
            <div className="App">
                <Router>
                    <Navbar bg="dark" varient="dark">
                        <NavbarBrand href="#home">Navbar</NavbarBrand>
                        <Nav className="mr.auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#About">About</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                        

                        </Nav>
                    </Navbar>

                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                    
                    
                </Router>
            </div>
    );
}

export default App;