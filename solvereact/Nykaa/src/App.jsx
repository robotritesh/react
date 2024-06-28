import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignIn from './components/SignIn';
import Cart from './components/Cart';
import Home from './components/Home';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<h1>Products Page</h1>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;