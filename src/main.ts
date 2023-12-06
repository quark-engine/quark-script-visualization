/* Setup Vue3 */
import { createApp } from 'vue';
import App from '@/App.vue';

/* Load Styles */
import '@/assets/styles/reset.css';
import '@/assets/styles/style.css';
import 'virtual:uno.css';

const app = createApp(App);
app.mount('#app');
