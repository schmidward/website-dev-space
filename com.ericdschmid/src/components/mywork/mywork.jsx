import React from "react";
import Header from "../header/header";

import './mywork.css'
import image from '../../assets/photos/02-06-2023_BM_RIVER-26.jpeg'

function MyWork() {



    return (
        <>
        <Header />
        <div className="main-content-wrapper">
            <div>
                <div className="top-box">
                    <h1>My Work</h1>
                </div>
                <div className="top-box">
                    <p>Articles published by National Public Radio, St. Louis Public Radio, WSHU Public Radio, and independently.</p>
                </div>
            </div>
            <hr></hr>
            <h1>2023</h1>
                {/* Top layer */}
                <div className="layer-zero">
                    {/* Photo on left */}
                    <div className="layer-one">
                        <img src={image} alt="The Mississippi River"/>
                        <p className="caption">The Old Chain of Rocks Bridge is seen in the distance last week from the middle of the Mississippi River. 
                            Over the years, developers have been challenged in trying to tame the mighty river's shores for the sake 
                            of economic development. CREDIT: <em>BRIAN MUÑOZ /  ST. LOUIS PUBLIC RADIO</em></p>
                    </div>
                    <div className="layer-two">
                        <p className="headline">Riverfront developments face obstacles, but the Mississippi River itself may be the biggest</p>
                    </div>
                </div>
        </div>
        </>
    )
}

export default MyWork;