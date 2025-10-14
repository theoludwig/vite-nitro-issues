import type { ErrorComponentProps } from "@tanstack/react-router"
import { ErrorComponent, Link, useRouter } from "@tanstack/react-router"

export interface DefaultCatchBoundaryProps extends ErrorComponentProps {}

export const DefaultCatchBoundary: React.FC<DefaultCatchBoundaryProps> = (
  props,
) => {
  const { error } = props

  const router = useRouter()

  console.error("DefaultCatchBoundary Error:", error)

  return (
    <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-6 p-4">
      <ErrorComponent error={error} />
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={async () => {
            await router.invalidate()
          }}
          className="rounded bg-gray-600 px-2 py-1 font-extrabold text-white uppercase dark:bg-gray-700"
        >
          Try Again
        </button>
        <Link
          to="/"
          className="rounded bg-gray-600 px-2 py-1 font-extrabold text-white uppercase dark:bg-gray-700"
        >
          Go to Home
        </Link>
      </div>
    </div>
  )
}
