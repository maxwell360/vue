import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import SignIn from "../views/SignInFlow/SignIn";
import Recover from "../views/SignInFlow/Recover";
import Request from "../views/SignInFlow/Request";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/team",
    name: "team",
    component: Team
  },
  {
    path: "/signin",
    name: "signIn",
    component: SignIn
  },
  {
    path: "/recover",
    name: "recover",
    component: Recover
  },
  {
    path: "/request",
    name: "request",
    component: Request
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
