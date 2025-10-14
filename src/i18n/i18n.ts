import * as z from "zod"

export const TIMEZONE = import.meta.env["TZ"] ?? "Europe/Paris"

export const I18N_LOCALES = ["fr-FR", "en-GB"] as const
export type I18nLocale = (typeof I18N_LOCALES)[number]
export const I18nLocaleZod = z.enum(I18N_LOCALES)
export const I18N_LOCALE_DEFAULT = "en-GB" satisfies I18nLocale
export const I18N_LOCALE_PREFIX = "never"

export const I18N_LOCALE_COOKIE_NAME = "I18N_LOCALE"
/**
 * The maximum age of the locale cookie in seconds.
 *
 * This is set to 10 years.
 */
export const I18N_LOCALE_COOKIE_MAX_AGE_SECONDS = 10 * 365.25 * 24 * 60 * 60

export const deepMerge = <
  Object1 extends object,
  Object2 extends object = Object1,
>(
  object1: Object1,
  object2: Object2,
): Object1 & Object2 => {
  const result = { ...object1 } as Object1 & Object2
  for (const key in object2) {
    if (Object.hasOwn(object2, key)) {
      if (typeof object2[key] === "object" && object2[key] !== null) {
        result[key] = deepMerge(result[key] as any, object2[key] as any)
      } else {
        result[key] = object2[key] as any
      }
    }
  }
  return result
}

export const hasI18nLocale = (locale: string): locale is I18nLocale => {
  return I18N_LOCALES.includes(locale)
}
