import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import SignIn from "../views/SignInFlow/SignIn";
import Recover from "../views/SignInFlow/Recover";
import Request from "../views/SignInFlow/Request";
import * as netlifyIdentityWidget from "netlify-identity-widget"

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/team",
      name: "team",
      component: Team,
      meta: {
        requiresAuth: true
      }
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
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = netlifyIdentityWidget.currentUser();
  const requiresAuth = to.matched.some(record => {
    return record.meta.requiresAuth
  })

  if (requiresAuth && !currentUser) {
    next("signin");
  } else {
    next();
  }
})

export default router;
