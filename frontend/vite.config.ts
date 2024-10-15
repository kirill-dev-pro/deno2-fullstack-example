import { defineConfig } from "npm:vite";
import deno from "npm:@deno/vite-plugin";
import solid from "npm:vite-plugin-solid";

// https://vite.dev/config/
export default defineConfig({
  plugins: [deno(), solid()],
});
