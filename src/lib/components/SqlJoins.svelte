<script>
  import {onMount} from 'svelte'
  import ClipboardJS from 'clipboard'
  import hljs from '@utils/highlight'
  import {DEFAULT_VALUE, SQL_MAP} from '@utils/constants'
  import VennDiagram from './VennDiagram.svelte'

  let copyButtonEl = $state(null)
  let isButtonClicked = $state(false)

  let descriptionText = $state(SQL_MAP[DEFAULT_VALUE].description)
  let sqlText = $state(SQL_MAP[DEFAULT_VALUE].sql.trim())
  let sqlExample = $derived(hljs.highlight(sqlText, {language: 'sql'}).value)
  let isButtonDisabled = $derived(sqlText.length === 0)

  const handleClick = (state = DEFAULT_VALUE) => {
    let {sql, description} = SQL_MAP[state]
    sqlText = sql.trim()
    descriptionText = description
  }

  onMount(() => {
    let timer = null

    const clipboard = new ClipboardJS(copyButtonEl, {
      text: () => sqlText
    })

    clipboard.on('success', () => {
      if (timer) {
        clearTimeout(timer)
      }

      if (isButtonDisabled) {
        return
      }

      isButtonClicked = true

      timer = setTimeout(() => {
        isButtonClicked = false
        timer = null
      }, 1000)
    })

    return () => {
      clipboard.destroy()
    }
  })
</script>

<style lang="postcss">
  .visualizer-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .venn-diagram {
    padding: 1rem;
  }

  .sql-description {
    color: #c1bebe;
  }

  .sql-code-block {
    width: 100%;
  }

  .sql-code-pre {
    margin: 1rem 0;
    min-height: 0;
    line-height: 1.1;
    width: 100%;
    box-sizing: border-box;
  }

  .sql-code-text {
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
  }

  .copy-button-block {
    width: 100%;
  }

  .copy-button {
    width: 100%;
    line-height: 2;
    background: #4b382e;
    border: 1px solid #ff8e5a;
    color: #d5d5d5;
    cursor: pointer;
    user-select: none;
  }

  .copy-button:hover,
  .copy-button:active {
    background: #5c3d2d;
  }

  .copy-button:disabled,
  .copy-button[disabled] {
    background: #3b3b3b;
    border: 1px solid #575656;
  }

  .copy-button-copied {
    background: #c25827;
  }

  .copy-button-copied:hover,
  .copy-button:active {
    background: #c25827;
  }
</style>

<div class="visualizer-block">
  <div class="venn-diagram">
    <VennDiagram handleClick={handleClick} />
  </div>

  <p class="sql-description">{descriptionText}</p>

  <div class="sql-code-block">
    <pre class="sql-code-pre">
      <code class="sql-code-text hljs language-sql">
        <!-- eslint-disable svelte/no-at-html-tags -->
        {@html sqlExample}
      </code>
    </pre>
  </div>

  <div class="copy-button-block">
    <button
      bind:this={copyButtonEl}
      class="copy-button"
      disabled={isButtonDisabled}
      class:copy-button-copied={isButtonClicked}
      title="Click to copy sql">
      {isButtonClicked ? 'Copied!' : 'Copy SQL'}
    </button>
  </div>
</div>
