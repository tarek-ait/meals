import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import ByIngredients from "../views/MealsByIngredients.vue";
import ByName from "../views/MealsByName.vue";
import ByLetter from "../views/MealsByLetter.vue";
import mealDetails from "../views/MealDetails.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/By-ingredient/:ingredients?",
    name: "ByIngredient",
    component: ByIngredients,
  },
  {
    path: "/By-name/:name?",
    name: "ByName",
    component: ByName,
  },
  {
    path: "/By-letter/:letter?", // question mark for optional parameters
    name: "ByLetter",
    component: ByLetter,
  },
  {
    path: "/meal/:id",
    name: "mealDetails",
    component: mealDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
