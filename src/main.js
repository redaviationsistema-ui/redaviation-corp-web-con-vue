import { createApp } from 'vue'
import App from './App.vue'
import enrutador from './enrutador'
import './style.css'

const app = createApp(App)

app.use(enrutador)

enrutador.isReady().then(() => {
  app.mount('#app')
})
