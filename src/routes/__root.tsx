import { TanStackDevtools } from "@tanstack/react-devtools"
import type { QueryClient } from "@tanstack/react-query"
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query"
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools"
import {
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { useServerFn } from "@tanstack/react-start"
import { IntlProvider } from "use-intl"
import { DefaultCatchBoundary } from "../components/DefaultCatchBoundary.tsx"
import { NotFound } from "../components/NotFound.tsx"
import { getServerI18n } from "../i18n/i18n.server.ts"
import stylesCss from "../styles.css?url"
import { seo } from "../utils/seo.ts"

interface RootDocumentProps extends React.PropsWithChildren {}
const RootDocument = (props: RootDocumentProps): React.ReactNode => {
  const { children } = props

  const getI18n = useServerFn(getServerI18n)
  const i18nQuery = useSuspenseQuery(
    queryOptions({
      queryKey: ["i18n"],
      queryFn: getI18n,
    }),
  )

  return (
    <html lang={i18nQuery.data.locale}>
      <head>
        <HeadContent />
      </head>
      <body>
        <IntlProvider {...i18nQuery.data}>{children}</IntlProvider>

        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "TanStack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
            {
              name: "TanStack Query",
              render: <ReactQueryDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => {
    return {
      meta: seo({
        title: "TanStack Start Example",
        description:
          "A starter project for TanStack Router, React Query, and React Start",
        keywords: ["tanstack-start", "example"],
        image:
          "https://tanstack.com/assets/og-C0HGjoLl.png?format=webp&quality=lossless",
      }),
      links: [{ rel: "stylesheet", href: stylesCss }],
    }
  },
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
  errorComponent: DefaultCatchBoundary,
})
