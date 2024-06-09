import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    base: "/Teamcards/",
    mode: "development",
    server: {
        host: true, // add host port export
        port: 3001,
    }
});
