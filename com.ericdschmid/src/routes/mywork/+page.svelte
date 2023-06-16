<script>
    import previews from '../../lib/content/mywork.json';

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
        <div class="page-content-layer">
            <hr />
            <!-- For each year in the JSON file display the year -->
            {#each previews.previews as preview}
            <h1 class="year">{preview.year}</h1>
            <!-- Top layer  -->
            <!-- For each article conained in each year, display each individual article -->
            {#each preview.articles as article}
            <div class="content-top-layer">
                <!-- Photo on left -->
                <div class="left-sub-layer">
                    <img src={article.data.img.src} alt={article.data.img.alt}/>
                    <p class="caption">{article.data.caption.text}<em>{article.data.caption.credit}</em></p>
                </div>
                <!-- Headline and Description (dek) on right -->
                <div class="right-sub-layer">
                    <p class="headline">{article.data.headline}</p>
                    <!-- For each description sentence in the articles object display one paragraph line with the sentence -->
                    {#each article.data.dek as dek}
                    <p class="dek">{dek}</p>
                    {/each}
                    <div class="button-link">
                        {#each article.data.button as button}
                        <a class="read-more" href={button.href} target="_blank">{button.text}</a>
                        {/each}
                    </div>
                </div>
            </div>
            <hr />
            {/each}
            {/each}
        </div>
    </div>
</section>

<style>

:global(html) {
    font-family: 'Titillium Web', sans-serif;
    min-width: 550px;
}

.main-content-wrapper {
    max-width: 992px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.top-box {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;  
}

.top-box h1 {
    font-size: 3em;
}

.content-top-layer {
    display: flex;
    flex-direction: row;
    max-width: 100%;
    align-content: space-between;
}

.year {
    margin-left: 1.25%;
    margin-top: 1.75%;
    margin-bottom: 1.75%;
    font-size: 2.5em;
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
    font-size: 1.75em;
    font-weight: bold;
}

.dek {
    margin-top: 1.5%;
    font-size: 1em;
    font-weight: 200;
}

.button-link {
    display: flex;
    justify-content: space-around;
}

.read-more {
    background-color: #912121;
    color: white;
    margin-top: 2%;
    margin-bottom: 2%;
    padding: 3%;
    text-align: center;
    text-decoration: none;
}

.read-more:hover {
    background-color: #9b3b3b;
}

</style>