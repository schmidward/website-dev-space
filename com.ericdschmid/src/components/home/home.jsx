import React from "react";
import './home.css';
import Header from '../header/header';

function Home() {
    return (
        <>
        <div className="bg">
            <Header />
        <div className="content-container">
            <div className="home-text">            
                <h1>Hello World</h1>
                <p>Welcome to my home.</p>
            </div>
        </div>
        </div>
        </>
    )
}

export default Home;