import { RouteRecordRaw } from "vue-router";

//获取模块文件
const layouts = import.meta.globEager("../layouts/*.vue");
//获取页面文件
const views = import.meta.globEager("../views/**/*.vue");
//返回组装的路由结果
function getRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[];
  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteByModule(file, module);
    route.children = getChilerenRoutes(route);
    layoutRoutes.push(route);
  });
  return layoutRoutes;
}

//获取布局对应的子路由
function getChilerenRoutes(layoutRoute: RouteRecordRaw) {
  console.log(layoutRoute);
  Object.entries(layoutRoute).forEach(([file, module]) => {
    if (file.includes(`../views/${layoutRoute.name as unknown as string}`)) {
      console.log(layoutRoute);
    }
  });
}
//组装路由
function getRouteByModule(file: string, module: { [key: string]: any }) {
  const name = file.replace(/.+layouts|\.vue/gi, "");
  const route = {
    path: name,
    component: module.default,
  } as RouteRecordRaw;
  return route;
}

export default getRoutes();
