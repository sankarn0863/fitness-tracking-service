import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import dashboard from"../components/dashboard.vue";
import Admin_dashboard from"../components/Admin_dashboard.vue";
import Request_list from"../components/Request_list.vue";
import Search_list from"../components/Search_list.vue";
import Friends_list from"../components/Friends_list.vue";
import Online_users from"../admin_content/Online_users.vue";
import Posts_active from"../admin_content/Posts_active.vue";
import User_account from"../admin_content/User_accounts.vue";
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
    path: "/request",
    name: "request_list",
    component: Request_list
  },
  { 
    path: "/search",
    name: "search_list",
    component: Search_list
  },
  { 
    path: "/friends",
    name: "friends_list",
    component: Friends_list
  },
  { 
    path: "/Admin",
    name: "Dashboard_Admin",
    component: Admin_dashboard
  },
  { 
    path: "/Online",
    name: "Dashboard_admin",
    component: Online_users
  },
  { 
    path: "/Posts",
    name: "Dashboard_Admin",
    component: Posts_active
  },
  { 
    path: "/Accounts",
    name: "Dashboard_Admin",
    component: User_account
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
