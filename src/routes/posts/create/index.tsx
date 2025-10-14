import { createFileRoute } from "@tanstack/react-router"

export interface RouteComponentProps {}
export const RouteComponent: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <h1>Posts/Create</h1>
    </div>
  )
}

export const Route = createFileRoute("/posts/create/")({
  component: RouteComponent,
})
