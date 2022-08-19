<svelte:options immutable="{true}" />

<script>
  import Header from '@components/Header.svelte'
  import SqlJoins from '@components/SqlJoins.svelte'
</script>

<style lang="postcss">
  .wrapper {
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    max-width: 51rem;
    padding: 1rem;
    border: #5d5d5d 1px solid;
  }
</style>

<svelte:head>
  <title>SQL Joins Visualizer</title>
</svelte:head>

<div class="wrapper">
  <Header />
  <SqlJoins />
</div>
