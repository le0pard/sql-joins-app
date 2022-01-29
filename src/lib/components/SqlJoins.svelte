<svelte:options immutable="{true}" />

<script>
  import VennDiagram from './VennDiagram.svelte'
</script>

<div id="sqlJoinsInformation" class="visualizer-block">
  <div class="visualizer-block-child">
    <div class="row">
      <div class="small-12 medium-6 large-6 columns">
        <div class="row">
          <div class="svg-control small-12 medium-12 large-12 columns">
            <VennDiagram />
          </div>
        </div>

        <div class="row">
          <div class="small-12 medium-12 large-10 large-centered columns">
            <p class="sql_description explain-text">
              Please select how do you want to do SQL JOIN between two table
            </p>
          </div>
        </div>
      </div>

      <div class="small-12 medium-6 large-6 columns">
        <div class="sql-result-block row">
          <div class="small-12 medium-12 large-12 columns">
            <pre><code id="clipboardSqlCode" class="sql_info language-sql hljs"></code></pre>
          </div>
          <div class="large-offset-8 large-4 medium-offset-8 medium-4 columns show-for-medium-up">
            <div class="copy-button-block">
              <button class="copy_button disabled" data-clipboard-text="" title="Click to copy sql"
                >Copy SQL</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
