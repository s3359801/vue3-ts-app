import './assets/reset.css'
import router from './router'
import { createPinia } from 'pinia'
import { createApp, provide } from 'vue'
import ViewPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import App from './App.vue'
import * as echarts from 'echarts';



const app = createApp(App);
app.provide('$echarts', echarts);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.use(ViewPlus);
app.mount('#app')

