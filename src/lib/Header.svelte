<script>
    import { asset } from '$app/paths';
    import Navigation from './Navigation.svelte';
</script>


<header class="header">
    <div class="logo-area">
        <img src={asset("/logo.png")} alt="Starter Kit Logo" />
       <!--<h1>Starter Kit</h1>-->
    </div>
    <Navigation />
</header>

<header2 class="cataloge-container">
  
</header2>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 var(--space-lg);
        background-color: var(--color-surface);
       
        box-shadow: var(--shadow-md);
        border-bottom: var(--border-default);
        position: relative;
        z-index: 100;
    }

    .logo-area {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        font-family: var(--font-heading);
    }

    .logo-area img {
        width: 300px;
        height: auto;
        border-radius: var(--radius-sm);
        box-shadow: var(--shadow-sm);
    }


    @keyframes fadeInTitle {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        .header {
            flex-direction: column;
            align-items: flex-start;
            padding: var(--space-sm);
        }

    }
</style>

