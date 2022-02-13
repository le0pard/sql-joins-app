<svelte:options immutable="{true}" />

<style lang="postcss">
  .hero-block {
    background: #c25827;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .hero-title {
    color: #040507;
    font-size: 2.5rem;
    padding: 0 1rem;
  }

  .hero-text {
    color: #040507;
    padding: 0 0.5rem;
    font-size: 1.2rem;
  }
</style>

<div class="hero-block">
  <h1 class="hero-title">SQL Joins Visualizer</h1>
  <p class="hero-text">
    SQL Joins Visualizer help to you build SQL JOIN between two tables by using of <a
      href="//en.wikipedia.org/wiki/Venn_diagram"
      target="_blank"
      rel="noopener noreferrer">Venn diagrams</a>
  </p>
</div>
