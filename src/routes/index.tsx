import {
  queryOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query"
import { createFileRoute, Link, useRouter } from "@tanstack/react-router"
import { I18n } from "../components/I18n/I18n.tsx"
import { setServerI18nLocale } from "../i18n/i18n.server.ts"

interface RouteComponentProps {}
const RouteComponent: React.FC<RouteComponentProps> = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const setI18nMutation = useMutation({
    mutationFn: setServerI18nLocale,
    onSuccess: async () => {
      await queryClient.invalidateQueries(
        queryOptions({
          queryKey: ["i18n"],
        }),
      )
      await router.invalidate()
    },
  })

  return (
    <div>
      <h1>
        Welcome on <span className="text-blue-600">Home</span>!
      </h1>

      <Link to="/posts">Go to Posts</Link>
      <Link
        to="/posts/$postId"
        params={{
          postId: "hello",
        }}
      >
        Go to Posts/hello
      </Link>
      <Link to="/posts/create">Go to Posts/create</Link>
      <Link to="/abc">Go to Abc</Link>

      <I18n
        onI18nChange={async (i18nLocale) => {
          await setI18nMutation.mutateAsync({ data: i18nLocale })
        }}
      />
    </div>
  )
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
})
