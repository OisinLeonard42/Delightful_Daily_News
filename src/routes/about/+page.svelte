<script>
    import { asset } from '$app/paths';
    import { FlipCard } from '$lib/components';

    const principles = [
        { title: 'Nature', description: 'Understand your mind, body, and purpose.' },
        { title: 'Space', description: 'Embrace constant change. Flow like water.' },
        { title: ' Animals', description: 'Resist impulsive action and fear.' },
        { title: 'World', description: 'Stay calm. Focus on now.' },
        { title: 'Sports', description: 'Sharpen your senses to see what others miss.' },
        { title: 'Gaming', description: 'Let go of ego. Blend with your surroundings.' },
    ];

    const virtues = [
        { title: 'William W. Purkey', description: 'You gotta dance like there nobodys watching love like you will never be hurt sing like there is nobody watching and live like it is heaven on earth.' },
        { title: 'Mahatma Gandhi', description: 'Be the change that you wish to see in the world..' },
        { title: 'Stephen Chbosky', description: 'We accept the love we think we deserve.' },
        { title: 'George Eliot', description: 'It is never too late to be what you might have been.' },
        { title: 'Friedrich Nietzsche', description: 'Without music, life would be a mistake.' },
        { title: 'Pablo Picasso', description: 'Everything you can imagine is real..' },
    ];
</script>


<svelte:head>
    <title>About | Starter Kit</title>
</svelte:head>


<section class="intro section-hero">

    <h1>About the Website</h1>
    <p>
        This Website was designed to show and display the good news in the world and show people that there is still some goodness in the world.
    </p>
</section> 

<section class="principles section-shinobi">
    <h2>Here are some examples of our news articles</h2>
    <div class="principle-grid">
        {#each principles as principle}
            <FlipCard {...principle} theme="shinobi" />
        {/each}
    </div>
</section>

<section class="virtues section-bushido">
    <h2>7 inspration quotes</h2>
    <div class="virtue-grid">
        {#each virtues as virtue}
            <FlipCard {...virtue} theme="bushido" />
        {/each}
    </div>
</section>

<section class="gallery section-gallery">
    <div class="grid">
        <figure>
            <img src={asset("/images/about/shrine.png")} alt="Mountain Shrine at Dawn" />
            <figcaption>
                A mountain shrine illuminated by dawn — symbolising spiritual focus and clarity of purpose.
            </figcaption>
        </figure>

        <figure>
            <img src={asset("/images/about/samurai.png")} alt="Samurai in Silhouette against Setting Sun" />
            <figcaption>
                Researchers Turn Car Battery Acid and Plastic Waste into Clean Hydrogen and New Plastic.
            </figcaption>
        </figure>

        <figure>
           <img src={asset("/images/about/Bees.jpeg")} alt="Bees in Southern California" />
            <figcaption>
            Unique Honeybees Found Only in Southern California Can Fend Off Deadly Varroa Mites.
            </figcaption>
        </figure>
    </div>
</section>

<section class="reflection section-quote" aria-labelledby="reflection-title">
	<div class="container">
		<h2 id="reflection-title">Reflections</h2>
		<blockquote>
			<p>
				“He who conquers himself is the mightiest warrior.”
			</p>
			<footer>— Confucius</footer>
		</blockquote>
	</div>
</section>


<style>
    section {
        margin-bottom: var(--space-xl);
        padding: var(--space-lg) var(--space-md);
        background-color: var(--color-surface);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-sm);
        animation: fadeIn 0.6s ease-in;
    }

    section h1 {
 font-family: var(--font-heading);
        font-size: var(--font-xl);
        color: var(--text-contrast);
        margin-bottom: var(--space-sm);
        text-align: center;
        position: relative;
    }
    section h2 {
        font-family: var(--font-heading);
        font-size: var(--font-xl);
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
        background-size: 2840px;
        /*background-repeat: repeat;*/
        /* background-repeat: no-repeat; */
        opacity: 0.95;
    }

    /* Section: Bushidō Virtues */
    .section-bushido {
        background-image: url("/images/backgrounds/png-night-sky.png");
        background-size: 1920px;
        /*background-repeat: repeat;*/
        opacity: 0.95;
    }

    /* Section: Gallery */
    .section-gallery {
      
        background-size: 1400px;
        /*background-repeat: repeat;*/
        background-position: bottom center;
        opacity: 0.95;
    }

    /* Section: Quote or Reflection */
    .section-quote {
		background-image: url("/images/backgrounds/zen-garden-ripples.png");
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-blend-mode: overlay;
		background-color: rgba(255, 255, 255, 0.85);
		padding: var(--space-xl) var(--space-md);
		text-align: center;
	}

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