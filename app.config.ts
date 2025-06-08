import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import solidSvg from "vite-plugin-solid-svg";

const config = defineConfig({ vite: { plugins: [solidSvg(), tailwindcss()] } });

export default config;
