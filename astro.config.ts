import { defineConfig } from "astro/config";

// Astro Integrations
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import partytown from "@astrojs/partytown";
import tailwind from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";
import webmanifest from "astro-webmanifest";
import serviceWorker from "astrojs-service-worker";

// Config
export default defineConfig({
  site: "https://ryzenstudio.com",
  // Set the output to 'static' for a static site generation
  output: "static",
  // The Vercel adapter will automatically detect the static output
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [
    react(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    robotsTxt(),
    webmanifest({
      name: "Ryzen Studio",
      short_name: "Ryzen",
      description: "Creative studio specializing in modern design & web solutions.",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#000000",
      icons: [
        {
          src: "/icon-192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icon-512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    }),
    serviceWorker(),
  ],

  vite: {
    plugins: [tailwind()],
    build: {
      target: "esnext",
    },
  },
});
