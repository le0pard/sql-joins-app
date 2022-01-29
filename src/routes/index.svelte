<svelte:options immutable="{true}" />

<script>
  import Header from '@components/Header.svelte'
  import SqlJoins from '@components/SqlJoins.svelte'
</script>

<style lang="postcss">
</style>

<svelte:head>
  <title>SQL Joins Visualizer</title>
</svelte:head>

<div class="wrapper">
  <Header />
  <SqlJoins />
</div>
