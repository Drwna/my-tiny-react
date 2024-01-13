import ReactDom from './core/ReactDom.js'
import App from './app.jsx'

const root = document.querySelector('#root')

ReactDom.createRoot(root).render(App)
