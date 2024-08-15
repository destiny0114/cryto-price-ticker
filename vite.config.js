import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import nodePolyfills from "vite-plugin-node-stdlib-browser";
import * as MillionLint from "@million/lint";

// https://vitejs.dev/config/
// https://github.com/ccxt/ccxt/issues/18561
export default defineConfig({
  plugins: [react(), nodePolyfills(), MillionLint.vite()],
});
