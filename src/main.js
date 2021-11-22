import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import './assets/tailwind.css';

// Custom Templates
// import dashboard from './components/Dashboard.vue';

// createApp(App).mount('#app');

// createApp(App).use(store).mount('#app');

createApp(App)
  .use(store)
  .use(router)
  // .use(dashboard)
  .mount('#app');
