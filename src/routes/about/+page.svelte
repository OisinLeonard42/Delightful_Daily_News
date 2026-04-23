<script>
    import { asset } from '$app/paths';
    import { FlipCard } from '$lib/components';
	import { articles } from '$lib/stores';

    const principles = [
       { title: 'William W. Purkey', description: 'You gotta dance like there nobodys watching love like you will never be hurt sing like there is nobody watching and live like it is heaven on earth.' },
        { title: 'Mahatma Gandhi', description: 'Be the change that you wish to see in the world..' },
        { title: 'Stephen Chbosky', description: 'We accept the love we think we deserve.' },
        { title: 'George Eliot', description: 'It is never too late to be what you might have been.' },
        { title: 'Friedrich Nietzsche', description: 'Without music, life would be a mistake.' },
        { title: 'Pablo Picasso', description: 'Everything you can imagine is real..' },
    ];

    const virtues = [
        { title: 'Nature', description: 'Do what is right by principle and justice.', articleId: "5"},
        { title: 'World', description: 'Face danger with bravery and honour.', articleId: "1" },
        { title: 'Sports', description: 'Show compassion and act for others.' , articleId: "12"},
        { title: 'Space', description: 'Demonstrate courtesy and politeness.', articleId: "2" },
        { title: 'Animals', description: 'Speak truth and act with integrity.', articleId: "11" },
        { title: 'Gaming', description: 'Uphold your reputation and values.' , articleId: "6" },
    ];
</script>


<svelte:head>
    <title>About | Starter Kit</title>
</svelte:head>


<div class="about-container">
    <section class="intro section-hero">

        <h1>About the Website</h1>
        <p>
            This Website was designed to show and display the good news in the world and show people that there is still some goodness in the world.
        </p>
    </section> 

    <section class="principles section-shinobi">
        <h2>7 inspritation quotes</h2>
        <div class="principle-grid">
            {#each principles as principle}
                <FlipCard {...principle} theme="shinobi" articleId="-1" />
            {/each}
        </div>
    </section>

    <section class="virtues section-bushido">
        <h2>Example of News Articles</h2>
        <div class="virtue-grid">
            {#each virtues as virtue}
                <FlipCard {...virtue} theme="bushido" />
            {/each}
        </div>
    </section>

    <section class="gallery section-gallery">
     <h2>Showcase of Our Newsest Articles</h2>
        <div class="grid">
            <figure>
                <img class="gaming" src={asset("/images/about/gaming.jpg")} alt="Mountain Shrine at Dawn" />
                <figcaption>
                    Nintendo is Partnering With a Nonprofit to Bring Gaming Consoles to Hospitalized Kids.
                </figcaption>
          
            </figure>

            <figure>
                <img class="volunteers" src={asset("/images/about/volunteers.jpg")} alt="Samurai in Silhouette against Setting Sun" />
                <figcaption>
                   6,500 Volunteers Build 10,000 Beds in 24 Hours for Kids Who Do not Have One of Their Own.
                </figcaption>
            </figure>

            <figure>
            <img class="bees" src={asset("/images/about/Bees.jpg")} alt="Tranquil Path through Bamboo Forest" />
                <figcaption>
                Unique Honeybees Found Only in Southern California Can Fend Off Deadly Varroa Mites
                </figcaption>
            </figure>
        </div>
    </section>

    <section class="reflection section-quote" aria-labelledby="reflection-title">
        <div class="container">
            <h2 id="reflection-title">Contacts</h2>
            <blockquote>
                <p>
                    “Emails:C00309964@setu.ie and C00306907@setu.ie”
                </p>
                <footer>— If you ever want to content us for any good news articles that you want to upload please email us and we will look over your article and we will upload it to the website.</footer>
            </blockquote>
        </div>
    </section>
</div>


<style>
 .about-container {
        display: flex;
        flex-direction: column;
        gap: var(--space-xl);
       
    }
    section {
        margin-bottom: var(--space-xl);
        padding: var(--space-lg) var(--space-md);
        background-color: var(--color-surface);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        animation: fadeIn 0.6s ease-in;
    }

    section h1, h2 {
 font-family: var(--font-heading);
        font-size: var(--font-xl);
        color: var(--text-contrast);
        margin-bottom: var(--space-sm);
        text-align: center;
        position: relative;
    }
   
    section h2::after {
        content: "";
        display: block;
        height: 2px;
        width: 60px;
        margin: var(--space-xs) auto 0 auto;
        background: var(--color-accent);
        border-radius: var(--radius-sm);
    }

    /* Section: Hero */
    .section-hero {
        background-image: url('/images/backgrounds/NightSky.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat; 
       /* background-blend-mode: overlay;*/
        /*background-color: rgba(255, 255, 255, 0.75);*/
    }

    /* Section: Shinobi Principles */
    .section-shinobi {
        background-image: url("/images/backgrounds/StarSky.jpg");
        background-size: 1000px;
        background-repeat: repeat;
        opacity: 0.95;
    }

    /* Section: Bushidō Virtues */
    .section-bushido {
        background-image: url("/images/backgrounds/png-night-sky.png");
        background-size: 1000px;
        /*background-repeat: repeat;*/
        opacity: 0.95;
    }

    /* Section: Gallery */
    .section-gallery {
     
        background-size: 800px;
        /*background-repeat: repeat;*/
        background-position: bottom center;
        opacity: 0.95;
    }
    .gaming{
    width: 400px;
    height: 630px;
    }
     .volunteers{
    width: 400px;
    height: 630px;
    }
      .bees{
    width: 400px;
    height: 630px;
    }

    /* Section: Quote or Reflection */
   

	.section-quote .container {
		max-width: 800px;
		margin: 0 auto;
		padding: var(--space-lg);
		background: rgba(243, 236, 236, 0.75);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-md);
		backdrop-filter: blur(3px);
	}

	.section-quote h2 {
		font-family: var(--font-heading);
		font-size: var(--font-xxl);
		margin-bottom: var(--space-md);
		color: var(--text-primary);
	}

	blockquote {
		font-family: var(--font-quote);
		font-style: italic;
		font-size: var(--font-lg);
		color: var(--text-secondary);
		margin: 0;
	}

	blockquote footer {
		margin-top: var(--space-sm);
		font-size: var(--font-sm);
		color: var(--text-tertiary);
	}

    p {
        font-size: var(--font-base);
        color: var(--text-contrast);
        max-width: 700px;
        margin: 0 auto var(--space-md);
        text-align: center;
        line-height: 1.8;
    }

    .principle-grid,
    .virtue-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
        gap: var(--space-lg);
        /* Ensure it doesn’t stretch children weirdly */
        justify-content: center;
        /* Prevent cards from hugging full width on large screens */
        max-width: 1200px;
        margin: var(--space-md) auto;
        padding: 0 var(--space-sm);
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: var(--space-lg);
        max-width: 1100px;
        margin: 0 auto;
    }

    figure {
        margin: 0;
        background: var(--color-background);
        border-radius: var(--radius-sm);
        overflow: hidden;
        box-shadow: var(--shadow-sm);
    }

    figure img {
        width: 100%;
        height: auto;
        display: block;
    }

    figcaption {
        padding: var(--space-sm);
        font-size: var(--font-sm);
        color: var(--text-secondary);
        text-align: center;
        background: var(--color-surface);
        font-style: italic;
    }

    /* Animations */
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Responsive tweaks */
    @media (max-width: 768px) 
    {
        .principle-grid,
        .virtue-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        }

        .principle-grid::after,
        .virtue-grid::after {
            content: "";
            visibility: hidden;
            height: 0;
            width: 180px; /* match min-width of grid items */
        }

        .grid {
            grid-template-columns: 1fr;
        }

        section h1, section h2 {
            font-size: var(--font-lg);
        }
    }

</style>