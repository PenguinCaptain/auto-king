import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import router from "./router";
import Tres from "@tresjs/core";

import "./scss/styles.scss";
import * as bootstrap from "bootstrap";

const app = createApp(App);
app.use(router).use(Tres);
app.mount("#app");
