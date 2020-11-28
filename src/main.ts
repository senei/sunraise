import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// import "./assets/tailwind.css"
// console.log(store)
createApp(App).use(store).mount('#app')
