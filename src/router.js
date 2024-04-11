import { createRouter, createMemoryHistory } from "vue-router"
import StartWork from "./components/router/StartWork.vue"
import Notifications from "./components/router/Notifications.vue"
import Training from "./components/router/Training.vue"
import Achievements from "./components/router/Achievements.vue"


export default createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: "/start-work", component: StartWork },
    { path: "/notifications", component: Notifications },
    { path: "/training", component: Training },
    { path: "/achievements", component: Achievements },
  ],
})
