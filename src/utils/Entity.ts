import type * as z from "zod"

export const defaultCatch = <
  T extends z.ZodType,
  V extends Exclude<z.output<T>, undefined>,
>(
  schema: T,
  defaultValue: V,
): z.ZodCatch<z.ZodDefault<T>> => {
  return schema.default(defaultValue).catch(defaultValue)
}
