import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import pinia from "./stores/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/css/element-theme.scss";

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(ElementPlus);
app.mount("#app");
