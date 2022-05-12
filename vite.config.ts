import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //添加路径别名
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
});
