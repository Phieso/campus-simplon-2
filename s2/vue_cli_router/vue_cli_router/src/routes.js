/* jshint esversion : 6 */
// ./src/routes.js

import Home from "./components/pages/Home.vue";
import Users from "./components/pages/Users.vue";
import Contact from "./components/pages/Contact.vue";
import Geographie from "./components/pages/Geographie.vue";
import EShop from "./components/pages/EShop.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/geographie",
    name: "Geographie",
    component: Geographie,
  },
  {
    path: "/eshop",
    name: "E-Shop",
    component: EShop,
  },
  {
    path: '*',
    redirect: { name: "Home" },
  }
];
