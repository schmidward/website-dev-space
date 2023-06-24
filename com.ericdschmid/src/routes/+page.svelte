<script>

</script>

<body>
<section class="hero">

    <div class="hero-inner" id='section-0'>
        <figure></figure>
        <div class="hero__title">
            <h2>Eric D. Schmid</h2>
            <h3>Investigative Journalist | Software Engineer</h3>
        </div>
    </div>
</section>
<section class="content">
<article class="content__inner">
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
    <p>Some text</p>
</article>

</section> 
</body>


<style>
    * {
    box-sizing: border-box;
}

figure {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
}

.hero {
    position: relative;
    width: 100vw;
    height: 100vh;
}

.hero:nth-child(1) figure {
    background-image: url("../lib/images/home-image-bikes.jpeg");
}

.hero-inner {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    clip: rect(0,auto,auto,0);
}

@supports(-webkit-overflow-scrolling: touch){
    .hero-inner {
        clip: unset;
        -webkit-clip-path:polygon(0 0, 100% 0, 100% 100%, 0% 100%);
                clip-path:polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
}

.hero__title{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    padding: .5rem; 
    width: 100%;
    height: 100%;
    color: white;
    text-align: center;
}

h2 {
    font-size: 6vw;
    margin-block-start: 1.25%;
    margin-block-end: 1.25%;
}

h3 {
    font-size: 4vw;
    margin-block-start: 1.25%;
    margin-block-end: 1.25%;
}


.content{
    position: relative;
    margin: 0 auto 8rem;
    padding: 2rem;
}


</style>