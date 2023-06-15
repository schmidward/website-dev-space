<script>
    import content from '../../lib/content/mywork.json';

</script>

<section>
    <div class="main-content-wrapper">
        <div>
            <div class="top-box">
                <h1>My Work</h1>
            </div>
            <div class="top-box">
                <p>Articles published by National Public Radio, St. Louis Public Radio, WSHU Public Radio, and independently.</p>
            </div>
        </div>
        <div>
            <hr />
            <h1 class="year">2023</h1>
            <!-- Top layer  -->
            <div class="content-top-layer">
                <!-- Photo on left -->
                <div class="left-sub-layer">
                    <img src={content.img.src} alt="The Mississippi River"/>
                    <p class="caption">The Old Chain of Rocks Bridge is seen in the distance last week from the middle of the Mississippi River. 
                        Over the years, developers have been challenged in trying to tame the mighty river's shores for the sake 
                        of economic development. CREDIT: <em>BRIAN MUÑOZ /  ST. LOUIS PUBLIC RADIO</em></p>
                </div>
                <!-- Headline and Description (dek) on right -->
                <div class="right-sub-layer">
                    <p class="headline">Riverfront developments face obstacles, but the Mississippi River itself may be the biggest</p>
                    <p class="dek">Ideas for development along parts of the St. Louis riverfront have become more common in recent years.</p>
                    <p class="dek">It’s a trend in communities along the entire 2,500-mile river with many seeing projects that promote the Mississippi’s natural 
                    assets and expand capacity for transportation, ecotourism and restoration.</p>                        
                    <p class="dek">These projects have an extra challenge in accommodating the Mississippi River, which is seeing frequent and massive fluctuations 
                    in its level as the climate changes.</p>
                        <div class="button-link">
                            <a class="read-more" href="https://news.stlpublicradio.org/economy-business/2023-02-14/riverfront-developments-face-obstacles-but-the-mississippi-river-itself-may-be-the-biggest">
                            READ AND LISTEN</a>
                        </div>
                    </div>
                </div>
            <hr />
        </div>
    </div>
</section>

<style>

    :global(html) {
        font-family: 'Titillium Web', sans-serif;
    }

    .main-content-wrapper {
    padding: 100px;
}

.top-box {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;  
}

.year {
    margin-left: 1.25%;
}

.content-top-layer {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-content: space-between;
}

.left-sub-layer {
    display: inline-block;
    width: 40%;
    box-sizing: border-box;
    align-self: flex-start;
    margin: 1.25%;
}

.right-sub-layer {
    width: 55%;
    align-self: flex-start;
    justify-self: flex-end;
    margin: 1.25%;
}

img {
    width: 100%;
}

.caption {
    font-size: 11.5px;
}

.headline {
    margin-top: -1.25%;
    margin-bottom: 2.5%;
    font-size: 1.25em;
    font-weight: bold;
}

.dek {
    margin-top: 1.5%;
    font-size: 1em;
    font-weight: 200;
}

.button-link {
    display: flex;
    align-items: center;
    justify-content: center;
}

.read-more {
    background-color: #912121;
    color: white;
    padding: 4%;
    text-align: center;
    text-decoration: none;
    
}

</style>