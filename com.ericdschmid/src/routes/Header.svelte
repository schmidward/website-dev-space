
<header class='full-width'>
    <div class='header-container'>
    <div class='logo'>
        <h1><a href="/">Eric D. Schmid</a></h1>
    </div>
    <!-- TODO: Lock nav bar at the top -->
        <nav>
            <ul class='nav-links'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/mywork">My Work</a>
                </li>
                <li>
                    <a href="/about">About Me</a>
                </li>
                <li>
                    <a href="/resume">Resume</a>
                </li>
            </ul>
        </nav>
    </div>
</header>

<style>
.full-width {
background-color: #912121;
}

header {
  width: 100vw;
}

.header-container {
    /* margin: 0px 20px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
}

.nav-links {
    display: flex;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    list-style: none;
}

li {
    padding: 0px 7.5px;
}

a {
    color: #ffffff;
}

a:visited {
    color: #ffffff;
}

a:hover {
    color: #d2d2d2;
}

.nav-links li {
    margin-right: 20px;
}
  
.nav-links li:last-child {
    margin-right: 0;
}


</style>