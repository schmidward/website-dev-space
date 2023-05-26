import React from "react";
import './home.css';
import Header from '../header/header';

function Home() {
    return (
        <>
        <section>
        <div className="bg">
            <Header />
        <div className="content-container">
            <div className="home-text">            
                <h1>Eric D. Schmid</h1>
                <p>Investigative Journalist | Software Engineer</p>
            </div>
        </div>
        </div>
        </section>
        </>
    )
}

export default Home;