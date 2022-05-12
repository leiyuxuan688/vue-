//给routes配置文件添加类型提示
import { RouteRecordRaw } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home.vue"),
  },
] as RouteRecordRaw[];

export default routes;
