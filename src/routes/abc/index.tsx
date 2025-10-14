import {
  createFileRoute,
  Link,
  stripSearchParams,
} from "@tanstack/react-router"
import * as z from "zod"
import { defaultCatch } from "../../utils/Entity.ts"
import { Abc } from "./-components/Abc.tsx"

interface RouteComponentProps {}
const RouteComponent: React.FC<RouteComponentProps> = () => {
  const searchParams = Route.useSearch()

  return (
    <div>
      <h1>
        Welcome on{" "}
        <span className="text-blue-600">Abc {searchParams.hello}</span>!
      </h1>

      <Abc />

      <Link
        to="/posts"
        search={{
          page: 5,
        }}
      >
        Go to Posts
      </Link>
      <Link to="/">Go to Home</Link>
    </div>
  )
}

const searchParamsSchema = z.object({
  hello: defaultCatch(z.string(), ""),
})

export const Route = createFileRoute("/abc/")({
  component: RouteComponent,
  validateSearch: searchParamsSchema,
  search: {
    middlewares: [stripSearchParams(searchParamsSchema.parse({}))],
  },
})
