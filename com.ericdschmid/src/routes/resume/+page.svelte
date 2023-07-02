<script>
    import resumes from "../../lib/content/resume.json"
    let resume = resumes.software;
    console.log(resume);
</script>

<section>
    <div class="max-w-screen-lg block mr-auto ml-auto">
        <div class="m-10 text-7xl font-semibold text-center">
            Resume
            <div class="flex flex-col ml-44 mr-44 mt-6 mb-4 text-xl md:ml-0 md:mr-0 md:flex-row md:justify-around">
                <div class="bg-red text-white mt-3 mb-3 p-5 text-center hover:bg-hover-red" >
                    Journalism
                </div>
                <div class="bg-red text-white mt-3 mb-3 p-5 text-center hover:bg-hover-red" >
                    Software Development
                </div>
            </div>
        </div>
        <div class="ml-8 mr-8 mb-10 flex flex-col">
            <hr class="mb-8" />
                <div>
                    <p class="-ml-1 text-8xl font-bold">{resume.name}</p>
                    <p class="text-2xl font-semibold ">{resume.subhead}</p>
                    <p class="font-light text-lg mt-2">{resume.dek}</p>
                    <p class="font-extralight text-lg  mt-3">
                        {#each resume.links as link}
                        {link.text}<span class="text-dark-red hover:text-hover-red"><a href="{link.href}" target="_blank">{link.href}</a></span>
                        {/each}
                    </p>
                    <p class="text-2xl font-semibold mt-3 ">{resume.projectHed}</p>
                    {#each resume.projects as project}
                    <p class="text-lg mt-2"><span class="font-semibold">{project.title}</span> — {project.subhead}</p>
                        {#each project.dek as dek}
                    <p class="leading-tight text-base">{dek}</p>
                        {/each}
                    {/each}
                </div>
                <div class="flex flex-col lg:flex-row">
                    <div class="lg:w-9/12">
                        <p class="text-2xl font-semibold mt-3">{resume.experienceHed}</p>
                        {#each resume.experiences as experience}
                        <div class="mb-2">
                            <p class="text-lg"><span class="font-semibold">{experience.title}</span> — {experience.subhead}</p>
                            <p class="-mt-1 font-light"><em>{experience.date}</em></p>
                            <p class="leading-none">{experience.dek}</p>
                            {#if experience.subdek}
                            {#each experience.subdek as subdek}
                            <p class="mt-1 ml-5 leading-tight text-base">{subdek}</p>
                            <p class="ml-5 leading-tight text-base"></p>
                            {/each}
                            {/if}
                        </div>
                        {/each}
                        <div class="mb-2">
                            <p class="text-lg"><span class="font-semibold">Metro East Reporter</span> — St. Louis Public Radio, Belleville, IL</p>
                            <p class="-mt-1 font-light"><em>June 2019 - June 2022</em></p>
                            <p class="leading-none">Worked remotely producing articles about Illinois communities adjacent to St. Louis</p>
                            <p class="mt-1 ml-5 leading-tight text-base">• Pioneered news coverage for 750,000 people who hadn’t been previously served</p>
                            <p class="ml-5 leading-tight text-base">• Produced web content reaching more than 200,000 unique users annually</p>
                        </div>
                        <div class="mb-2">
                            <p class="text-lg"><span class="font-semibold">Freelance Reporter</span> — National Public Radio, Marketplace, Science Friday</p>
                            <p class="-mt-1 font-light"><em>April 2018 - Present</em></p>
                            <p class="leading-none">Pitches, reports, and produces original news content for national platforms</p>
                        </div>
                        <div class="mb-2">
                            <p class="text-lg"><span class="font-semibold">Dow Jones News Fund Digital Media Intern</span> — AccuWeather, State College, PA</p>
                            <p class="-mt-1 font-light"><em>June 2018 - August 2018</em></p>
                            <p class="leading-none">Produced video content toping five million views on company website and socials</p>
                        </div>
                        <div class="mb-2">
                            <p class="text-lg"><span class="font-semibold">College Associate</span> — Shepard Smith Reporting, Fox News Channel, New York, NY</p>
                            <p class="-mt-1 font-light"><em>June 2017 - August 2017</em></p>
                            <p class="leading-none">Sourced video content for a live national broadcast reaching millions of people each day</p>
                        </div>
                        <p class="text-2xl font-semibold mt-3 ">Education</p>
                        <div class="mb-2">
                            <p class="text-lg"><span class="font-semibold">LaunchCode</span> - St. Louis, MO — September 2022 - June 2023</p>
                            <p class="leading-none">30-week full-stack development course in JavaScript, Angular, Java, and Spring Boot</p>
                            <p class="mt-1 ml-5 leading-tight text-base">• Project experience reviewing and completing code bases to unit test specifications</p>
                        </div>
                        <div class="mb-2">
                            <p class="text-lg"><span class="font-semibold">Stony Brook University</span> - Stony Brook, NY — Class of 2018</p>
                            <p class="leading-none">Bachelor of Arts in Journalism, Business Management Minor</p>
                        </div>
                    </div>
                    <div class="flex flex-row lg:flex-col lg:w-3/12">
                        <div class="w-2/5 lg:w-auto">
                            <p class="text-2xl font-semibold mt-3">Skills</p>
                            <div class="mb-2">
                                <p class="text-lg font-semibold">Programming Languages</p>
                                <p class="leading-tight text-lg">• Java</p>
                                <p class="leading-tight text-lg">• JavaScript / TypeScript</p>
                                <p class="leading-tight text-lg">• HTML5 / CSS3</p>
                            </div>
                            <div class="mb-2">
                                <p class="text-lg font-semibold">Frameworks</p>
                                <p class="leading-tight text-lg">• React</p>
                                <p class="leading-tight text-lg">• Svelte</p>
                                <p class="leading-tight text-lg">• Spring Boot</p>
                                <p class="leading-tight text-lg">• Spring Security</p>
                            </div>
                            <div class="mb-2">
                                <p class="text-lg font-semibold">Databases</p>
                                <p class="leading-tight text-lg">• MySQL</p>
                                <p class="leading-tight text-lg">• PostgreSQL</p>
                            </div>
                            <div class="mb-2">
                                <p class="text-lg font-semibold">Tools</p>
                                <p class="leading-tight text-lg">• Grunt</p>
                                <p class="leading-tight text-lg">• Node</p>
                                <p class="leading-tight text-lg">• REST</p>
                            </div>
                        </div>
                        <div class="w-3/5 lg:w-auto">
                            <p class="text-2xl font-semibold mt-3 ">Awards & Honors</p>
                            <div class="mt-2 mb-3">
                                <p class="text-lg font-semibold leading-none">2022 IRE Award Finalist & 2023 Region 5 Murrow Award</p>
                                <p class="leading-none mt-1">For original and revelatory watchdog journalism exposing a 25-year coverup of toxic groundwater contamination in Springfield, Missouri.</p>
                            </div>
                            <div class="mt-2 mb-2">
                                <p class="text-lg font-semibold leading-none">Keynote Speaker</p>
                                <p class="leading-none mt-1">2022 Mississippi River Basin Ag & Water Desk Conference</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</section>