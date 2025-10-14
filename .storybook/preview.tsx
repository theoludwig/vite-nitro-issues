import type { Preview } from "@storybook/react-vite"
import {
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router"
import i18nMessages from "../src/i18n/translations/en-GB.json"
import "../src/styles.css"
import { I18N_LOCALE_DEFAULT, TIMEZONE } from "../src/i18n/i18n.ts"
import { IntlProvider } from "use-intl"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

const preview: Preview = {
  parameters: {
    a11y: {
      test: "error",
    },
    controls: {
      disableSaveFromUI: true,
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      const rootRoute = createRootRoute({
        component: Story,
      })
      const routeTree = rootRoute
      const router = createRouter({ routeTree })
      return (
        <QueryClientProvider client={queryClient}>
          <IntlProvider
            messages={i18nMessages}
            locale={I18N_LOCALE_DEFAULT}
            timeZone={TIMEZONE}
          >
            <RouterProvider router={router} />
          </IntlProvider>
        </QueryClientProvider>
      )
    },
  ],
}

export default preview
