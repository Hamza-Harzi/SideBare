import { createApp } from "vue";
import App from "./App.vue";
// Import the master CSS file
import "./index.css";
import router from "./router";

createApp(App).use(router).mount("#app");
