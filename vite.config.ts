import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { nitro } from "nitro/vite"
import { defineConfig } from "vite"

const isTest = process.env.VITEST != null

export default defineConfig({
  plugins: [
    ...(!isTest ? [nitro()] : []),
    tailwindcss(),
    tanstackStart({
      router: {
        quoteStyle: "double",
      },
    }),
    viteReact(),
  ],
})
