import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/Index.vue";
import Demo from "../pages/demo/Index.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/demo", name: "Demo", component: Demo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
