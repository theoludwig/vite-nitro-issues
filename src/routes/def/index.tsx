import { createFileRoute } from "@tanstack/react-router"
import { seo } from "../../utils/seo"

export interface RouteComponentProps {}
export const RouteComponent: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <h1>RouteComponent</h1>
    </div>
  )
}

export const Route = createFileRoute("/def/")({
  component: RouteComponent,
  head: () => {
    return {
      meta: seo({
        title: "Def Route",
        description: "This is the def route",
        keywords: ["def", "route"],
      }),
    }
  },
})
