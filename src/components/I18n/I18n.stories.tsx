import type { Meta, StoryObj } from "@storybook/react-vite"

// eslint-disable-next-line import-x/extensions ref: https://github.com/oxc-project/oxc/issues/12220
import { fn } from "storybook/test"
import { I18n as I18nComponent } from "./I18n.tsx"

const meta = {
  title: "I18n",
  component: I18nComponent,
} satisfies Meta<typeof I18nComponent>

export default meta

type Story = StoryObj<typeof meta>

export const I18n: Story = {
  args: {
    onI18nChange: fn(),
  },
}
