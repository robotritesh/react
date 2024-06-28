import React from 'react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Search Query:', searchQuery);
    };

    return ( 
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/"><img src="data:image/png;base64,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" alt="" /></a> 
            </div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
            </ul>

            <select className="navbar-select">
                <option value=""><b>Brands</b></option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>

            <form className="navbar-search" onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button type="submit">Search</button>
            </form>

            <ul className="navbar-links">
                <li><a href="/signin">Sign In</a></li>
                <li ><a href="/login">Login</a></li>
            </ul>

            <li id='cart-button'><a href="/cart" className="cart-button">Add to Cart</a></li>

        </nav>
    );
};

export default Navbar;
