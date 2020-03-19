import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import dashboard from"../components/dashboard.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  { 
    path: "/dash",
    name: "Signin",
    component: dashboard
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/login",
    name: "Sign&nbsp;up/Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/instruction",
    name: "Instructor Blog",
    component: () => import("../views/Instruction.vue")
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
