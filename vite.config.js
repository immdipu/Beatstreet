import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",

      manifest: {
        name: "BeatStreet",
        short_name: "B",
        description:
          "Beatstreet is the ultimate destination for streaming and downloading music for free.",
        icons: [
          {
            src: "/images/logo.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/images/logo.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/images/maskable_icon.png",
            sizes: "203x203",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        start_url: "/",
        display: "standalone",
        background_color: "#16191e",
        theme_color: "#1d242c",
      },
    }),
  ],
});
