import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // এটি আপনার লোকাল নেটওয়ার্কে সাইটটি শেয়ার করবে
    port: 5173, // আপনার পোর্ট নাম্বার
  },
});
