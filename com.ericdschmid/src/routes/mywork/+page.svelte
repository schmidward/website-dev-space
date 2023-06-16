<script>
    import previews from '../../lib/content/mywork.json';

    // TODO: WRITE TESTS FOR THIS FUNCITON
    function content(yr) {
        let arr = [];
        for (let i=0; i < previews.content.length; i++) {
            if (previews.content[i].year === yr) {
                arr.push(previews.content[i]);
            }            
        }
        return arr;
    }
    const year2023 = content(2023);


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
            <h1 class="year">2023</h1>
            <!-- Top layer  -->
            {#each previews.content as preview}
            <div class="content-top-layer">
                <!-- Photo on left -->
                <div class="left-sub-layer">
                    <img src={preview.data.img.src} alt={preview.data.img.alt}/>
                    <p class="caption">{preview.data.caption.text}<em>{preview.data.caption.credit}</em></p>
                </div>
                <!-- Headline and Description (dek) on right -->
                <div class="right-sub-layer">
                    <p class="headline">{preview.data.headline}</p>
                    <!-- TODO: For/Each for the deks -->
                    <p class="dek">{preview.data.dek.one}</p>
                    <p class="dek">{preview.data.dek.two}</p>                        
                    <p class="dek">{preview.data.dek.three}</p>
                        <div class="button-link">
                            <a class="read-more" href={preview.data.button.href}>{preview.data.button.text}</a>
                        </div>
                    </div>
                </div>
                <hr />
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
    padding: 10%;
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

.year {
    margin-left: 1.25%;
}

.content-top-layer {
    display: flex;
    flex-direction: row;
    max-width: 100%;
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