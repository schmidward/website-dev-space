# website-redesign
Redesigning [www.ericdschmid.com] with Svelte. 

## Development Log/Narrative

I started this project intending to use React (and there's even evidence of it if you check out the `react-version` folder.) So why change to Svelte?

The key reason was becasue I wanted to experiment with the tailwindscss and loading that processor into a react framework was more arduous than I expected. 

Plus, after some research on Svelte and how it worked, I decided to switch since that framework appeared more suited to the _kind_ of end prodcut I was going for. I'm really attracted to how lightweight it is and that it does server side rendering. That seemed like the best option for a webiste made up of mostly static content that doesn't change all that often. 

This is obviously a work in progress and I try to add to the build as often as possible, but that is challenging given development must come outside of my full-time job.

## Current Next steps

I plan to build out `mywork` to leverage a for/each loop on a growing .json file of all the content. This would make the content easier to manage and add to when a new article needs to be added to the page.

I also will be making my own article pages so that I'm not linking to external websites.