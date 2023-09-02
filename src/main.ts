import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

// Add the imported icons to the library
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faLinkedin, faGithub);

app.mount("#app");
