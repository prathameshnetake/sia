import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";
import Login from "../pages/login.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
