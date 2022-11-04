import { createApp } from "vue";
import { createPinia } from "pinia";

import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/styles/index.scss";

const app = createApp(App);

app.component("Header", Header);
app.component("Footer", Footer);

app.use(createPinia());
app.use(router);

app.mount("#app");
