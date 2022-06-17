import './App.css';
import React from 'react';
import {BrowserRouter as Router, Link, Route, switch } from 'react-router-dom'
function Opppp() {
    return (
        <div className="App">
        <Router>
            <Link to="" >Home</Link><br />
            <Link to="/about" >About</Link><br />
            <Link to="/Login" >Login</Link><br />

            <Switch>
            <Route path="" exact={true}><Home /></Route>
            <Route path="/about"><About /></Route>
            <Route path="*"><Page not  Found/></Route>
            </Switch>
        </Router>
        </div>
    );
}

function Home() {
    return (
        <div>
        <h1>Home Page</h1>
        <p>This is my Home Page</p>
        </div>

    );
}

function About() {
    return (
        <div>
        <h1>About Page</h1>
        <p>This is my About Page</p>
        </div>

    );
}

export default Opppp;
