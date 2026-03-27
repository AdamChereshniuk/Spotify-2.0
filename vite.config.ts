import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import observerPlugin from "mobx-react-observer/babel-plugin";
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: "/Spotify-2.0/",
  plugins: [react(
    {
      babel: {
        plugins: [
          observerPlugin(
            // optional
            { exclude: ["src/ui-components/**"] }
          ),
        ],
      },
    }
  ), tailwindcss(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
