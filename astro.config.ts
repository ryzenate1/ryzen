import { defineConfig } from "astro/config";

// Astro Integrations
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import partytown from "@astrojs/partytown";
import tailwind from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";
import seo from "astro-seo";
import webmanifest from "astro-webmanifest";
import serviceWorker from "astrojs-service-worker";

// Config
export default defineConfig({
  site: "https://ryzenstudio.com", // Required for sitemap, SEO, manifest
  output: "server", // Needed for SSR & Vercel
  adapter: vercel(),

  integrations: [
    react(),
    sitemap(),
    partytown({
      // Moves third-party scripts off the main thread
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    robotsTxt({
      policy: [{ userAgent: "*", allow: "/" }],
      sitemap: "https://ryzenstudio.com/sitemap-index.xml",
      host: "https://ryzenstudio.com",
    }),
    seo({
      title: "Ryzen Studio",
      description: "Creative studio specializing in modern design & web solutions.",
      canonical: "https://ryzenstudio.com",
      openGraph: {
        type: "website",
        image: "https://ryzenstudio.com/og-image.png",
      },
      twitter: {
        card: "summary_large_image",
        site: "@ryzenstudio",
      },
    }),
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
    serviceWorker({
      strategies: "generateSW", // Or "injectManifest" if you customize
      register: true,
    }),
  ],

  vite: {
    plugins: [tailwind()],
    build: {
      target: "esnext", // Optimize for modern browsers
    },
  },

  experimental: {
    env: true, // Allows usage of .env with @t3-oss/env-core
  },
});
