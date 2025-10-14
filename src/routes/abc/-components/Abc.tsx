import { getRouteApi } from "@tanstack/react-router"

const Route = getRouteApi("/abc/")

export interface AbcProps {}
export const Abc: React.FC<AbcProps> = () => {
  const searchParams = Route.useSearch()

  return (
    <div>
      <h1>Abc {searchParams.hello}</h1>
    </div>
  )
}
