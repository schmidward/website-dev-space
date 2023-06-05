import React from "react";
import Header from "../header/header";
import { Button, View } from "react-native";

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
            <hr />
            <h1 className="year">2023</h1>
                {/* Top layer */}
                <div className="layer-zero">
                    {/* Photo on left */}
                    <div className="layer-one">
                        <img src={image} alt="The Mississippi River"/>
                        <p className="caption">The Old Chain of Rocks Bridge is seen in the distance last week from the middle of the Mississippi River. 
                            Over the years, developers have been challenged in trying to tame the mighty river's shores for the sake 
                            of economic development. CREDIT: <em>BRIAN MUÑOZ /  ST. LOUIS PUBLIC RADIO</em></p>
                    </div>
                    {/* Headline and Description (dek) on right */}
                    <div className="layer-two">
                        <p className="headline">Riverfront developments face obstacles, but the Mississippi River itself may be the biggest</p>
                        <p className="dek">Ideas for development along parts of the St. Louis riverfront have become more common in recent years.</p>
                        <p className="dek">It’s a trend in communities along the entire 2,500-mile river with many seeing projects that promote the Mississippi’s natural 
                        assets and expand capacity for transportation, ecotourism and restoration.</p>                        
                        <p className="dek">These projects have an extra challenge in accommodating the Mississippi River, which is seeing frequent and massive fluctuations 
                        in its level as the climate changes.</p>
                        <View>
                            <Button title="READ AND LISTEN" color="#912121"></Button>
                        </View>
                    </div>
                </div>
            <hr />
        </div>
        </>
    )
}

export default MyWork;