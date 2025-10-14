import {
  createFileRoute,
  Link,
  stripSearchParams,
} from "@tanstack/react-router"
import * as z from "zod"
import { defaultCatch } from "../../utils/Entity.ts"

interface RouteComponentProps {}
const RouteComponent: React.FC<RouteComponentProps> = () => {
  const searchParams = Route.useSearch()

  return (
    <div>
      <h1>
        Welcome on <span className="text-blue-600">Posts</span>!
      </h1>

      <Link to="/abc">Go to Abc</Link>
      <Link to="/">Go to Home</Link>

      <pre>{JSON.stringify(searchParams, null, 2)}</pre>
    </div>
  )
}

const searchParamsSchema = z.object({
  page: defaultCatch(z.number(), 1),
  filter: defaultCatch(z.string(), ""),
  sort: defaultCatch(z.enum(["newest", "oldest", "price"]), "newest"),
})

export const Route = createFileRoute("/posts/")({
  component: RouteComponent,
  validateSearch: searchParamsSchema,
  search: {
    middlewares: [stripSearchParams(searchParamsSchema.parse({}))],
  },
})
