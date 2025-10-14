import { defineConfig, defineProject, mergeConfig } from "vitest/config"
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin"
import viteConfig from "./vite.config.ts"

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        enabled: true,
        provider: "v8",
      },
      projects: [
        defineProject({
          plugins: [storybookTest()],
          test: {
            name: "storybook",
            browser: {
              enabled: true,
              provider: "playwright",
              headless: true,
              instances: [{ browser: "chromium" }],
            },
            setupFiles: ["vitest.setup.ts"],
          },
        }),
      ],
    },
  }),
)
