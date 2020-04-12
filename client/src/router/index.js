import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import dashboard from"../components/dashboard.vue";
import Admin_dashboard from"../components/Admin_dashboard.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  { 
    path: "/dash",
    name: "Dashboard",
    component: dashboard
  },
  { 
    path: "/Admin",
    name: "Dashboard_Admin",
    component: Admin_dashboard
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/click",
    name: "Click Here",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/reg",
    name: "Register",
    component: () => import("../views/Register.vue")
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
