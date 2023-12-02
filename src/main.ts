import { createApp } from "vue";
import ElementPlus from "element-plus";
import * as VueRouter from "vue-router";
import "element-plus/dist/index.css";
import "./style.css";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";
import PracticePlayground from "./components/PracticePlayground.vue";
import { getCommonRadicals } from "./shared/radical";

const app = createApp(App);
const routes = [
  { path: "/", component: HelloWorld, props: { msg: "Hello World" } },
  {
    path: "/practice/common-radicals",
    component: PracticePlayground,
    props: (_: any) => {
      return {
        schema: "common-radicals",
        radicals: getCommonRadicals(),
      };
    },
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
app.use(router);
app.use(ElementPlus);
app.mount("#app");
