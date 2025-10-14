import { Link } from "@tanstack/react-router"

export interface NotFoundProps {}
export const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <div>
      <h1>NotFound</h1>

      <Link
        to="/"
        className="rounded bg-cyan-600 px-2 py-1 text-sm font-black text-white uppercase"
      >
        Go to Home
      </Link>
    </div>
  )
}
