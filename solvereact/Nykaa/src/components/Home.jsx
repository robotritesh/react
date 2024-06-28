import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="home-container">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.title} className="product-image" />
                    <h3 className="product-name">{product.title}</h3>
                    <p className="product-price">${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;
