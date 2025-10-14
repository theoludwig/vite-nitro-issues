import { createFileRoute } from "@tanstack/react-router"

export interface RouteComponentProps {}
export const RouteComponent: React.FC<RouteComponentProps> = () => {
  const params = Route.useParams()

  return (
    <div>
      <h1>Posts/{params.postId}</h1>
    </div>
  )
}

export const Route = createFileRoute("/posts/$postId")({
  component: RouteComponent,
})
