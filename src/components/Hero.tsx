import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <header className="hero">
            <div className="top-right">
                <img src="path/to/logo.png" alt="Logo" />
                <p>Phone Number: (123) 456-7890</p>
                <button>Free Consultation</button>
            </div>
        </header>
    );
};

export default Hero;