import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Pokemon-Card-Collection/",
  plugins: [react()],
});
