import '../styles/global.css'
import 'highlight.js/styles/atom-one-dark.css'

import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
