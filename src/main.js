import { createApp } from 'vue'
import App from './App.vue'
import enrutador from './enrutador'
import './style.css'

createApp(App).use(enrutador).mount('#app')
