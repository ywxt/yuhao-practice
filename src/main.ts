import { createApp } from "vue";
import ElementPlus from "element-plus";
import * as VueRouter from "vue-router";
import "element-plus/dist/index.css";
import "./style.css";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";
import PracticePlayground from "./components/PracticePlayground.vue";

const app = createApp(App);
const routes = [
  {
    path: "/",
    component: App,
    children: [
      { path: "", component: HelloWorld },
      {
        path: "practice/common-radicals",
        component: PracticePlayground,
        props: (_: any) => {
          return {
            schema: "common-radicals",
            radicals: [
              {
                text: "一",
                code: "Fi",
                type: "both",
              },
            ],
          };
        },
      },
    ],
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
app.use(router);
app.use(ElementPlus);
app.mount("#app");
