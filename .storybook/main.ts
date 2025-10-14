import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  docs: {
    defaultName: "Documentation",
  },
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
}

export default config
