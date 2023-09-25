import { createApp } from 'vue'
import './style.css'
import router from "./router";
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

import App from './App.vue'

createApp(App)
.use(VueAwesomePaginate)
.use(router)
.mount('#app')
