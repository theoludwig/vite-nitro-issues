import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, userEvent, within } from "storybook/test"

import { PageTest as PageTestComponent } from "./PageTest.tsx"

const meta = {
  title: "PageTest",
  component: PageTestComponent,
} satisfies Meta<typeof PageTestComponent>

export default meta

type Story = StoryObj<typeof meta>

export const PageTest: Story = {
  args: {
    title: "PageTest",
    defaultColorMode: "red",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const changeModeButton = canvas.getByRole("button", {
      name: "Change color mode",
    })
    await userEvent.click(changeModeButton)

    await expect(
      canvas.getByRole("heading", { name: "PageTest blue" }),
    ).toBeInTheDocument()

    await userEvent.click(changeModeButton)
    await expect(
      canvas.getByRole("heading", { name: "PageTest red" }),
    ).toBeInTheDocument()
  },
}
