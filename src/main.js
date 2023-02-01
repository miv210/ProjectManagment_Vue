import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import apiPlugin from './plugin/index'
import loadPlugin from './plugin/load'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

const app = createApp(App)

app.use(router)
app.use(Vuex)
app.use(apiPlugin)
app.use(loadPlugin)

app.mount('#app')
