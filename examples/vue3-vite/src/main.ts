import { createApp } from 'vue'
import VueBbob from '@lng2004/bbob-vue3';
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.use(VueBbob);

app.mount('#app')
