import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createRouter } from "@tanstack/react-router"
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query"
import { routeTree } from "./routeTree.gen.ts"

export const getRouter = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
      },
    },
  })

  const router = createRouter({
    routeTree,
    context: {
      queryClient,
    },
    defaultPreload: "intent",
    scrollRestoration: true,
    Wrap: ({ children }) => {
      return (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      )
    },
  })

  setupRouterSsrQueryIntegration({ router, queryClient })

  return router
}
