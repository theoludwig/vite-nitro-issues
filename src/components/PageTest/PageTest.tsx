// import { getRouteApi } from "@tanstack/react-router"

import { useState } from "react"
import { classNames } from "../../utils/classNames.ts"
import { Link } from "@tanstack/react-router"

// const Route = getRouteApi("/abc/")

const COLOR_MODES = ["red", "blue"] as const
type ColorMode = (typeof COLOR_MODES)[number]

export interface PageTestProps {
  title: string
  defaultColorMode: ColorMode
}
export const PageTest: React.FC<PageTestProps> = (props) => {
  const { title, defaultColorMode } = props
  // const searchParams = Route.useSearch()
  const [mode, setMode] = useState<ColorMode>(defaultColorMode)

  return (
    <div>
      <h1
        className={classNames({
          "text-red-600": mode === "red",
          "text-blue-600": mode === "blue",
        })}
      >
        {title} {mode}
      </h1>

      {/* <p>{searchParams.hello}</p> */}

      <Link to="/">Go to home</Link>

      <button
        onClick={() => {
          setMode((old) => {
            return old === "red" ? "blue" : "red"
          })
        }}
      >
        Change color mode
      </button>
    </div>
  )
}
