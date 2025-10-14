import type { JSX } from "react"

export interface SeoInput {
  title: string
  description: string
  keywords: string[]
  image?: string
}

export type SeoOutput = Array<JSX.IntrinsicElements["meta"]>

export const seo = (input: SeoInput): SeoOutput => {
  const { title, description, keywords = [], image: imageRaw } = input
  const url = "https://tanstack.com"
  const image =
    imageRaw != null
      ? !imageRaw.startsWith("https")
        ? `${url}${imageRaw}`
        : imageRaw
      : null
  return [
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    { name: "color-scheme", content: "dark" },
    { name: "theme-color", content: "#AAAFFF" },
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords.join(",") },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    { name: "og:type", content: "website" },
    { name: "og:url", content: url },
    { name: "twitter:url", content: url },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    ...(image != null
      ? [
          { name: "twitter:image", content: image },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "og:image", content: image },
        ]
      : []),
  ]
}
