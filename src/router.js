import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import ExError from "@/views/Error";
import CoinDetail from "@/views/CoinDetail";

Vue.use(Router);

export default new Router({
  mode: "history",
  name: "",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "*",
      name: "Error",
      component: ExError
    },
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail
    }
  ]
});
