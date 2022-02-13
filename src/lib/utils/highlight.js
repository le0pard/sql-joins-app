import hljs from 'highlight.js/lib/core'
import sqlLang from 'highlight.js/lib/languages/sql'

hljs.registerLanguage('sql', sqlLang)

export default hljs
