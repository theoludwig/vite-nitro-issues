import { createServerFn } from "@tanstack/react-start"
import { getCookie, setCookie } from "@tanstack/react-start/server"
import type { IntlConfig } from "use-intl"
import type { I18nLocale } from "./i18n.ts"
import {
  deepMerge,
  hasI18nLocale,
  I18N_LOCALE_COOKIE_MAX_AGE_SECONDS,
  I18N_LOCALE_COOKIE_NAME,
  I18N_LOCALE_DEFAULT,
  I18nLocaleZod,
  TIMEZONE,
} from "./i18n.ts"

export const getServerI18n = createServerFn({
  method: "GET",
}).handler(async () => {
  let i18nLocale: I18nLocale = I18N_LOCALE_DEFAULT

  const i18nLocaleCookie = getCookie(I18N_LOCALE_COOKIE_NAME)
  if (i18nLocaleCookie != null && hasI18nLocale(i18nLocaleCookie)) {
    i18nLocale = i18nLocaleCookie
  }

  const userMessages = (await import(`./translations/${i18nLocale}.json`))
    .default
  const defaultMessages = (
    await import(`./translations/${I18N_LOCALE_DEFAULT}.json`)
  ).default
  const messages = deepMerge(defaultMessages, userMessages)

  return {
    locale: i18nLocale,
    timeZone: TIMEZONE,
    messages,
  } as const satisfies IntlConfig
})

export const setServerI18nLocale = createServerFn({
  method: "POST",
})
  .inputValidator(I18nLocaleZod)
  .handler(async ({ data }) => {
    setCookie(I18N_LOCALE_COOKIE_NAME, data, {
      httpOnly: true,
      secure: true,
      maxAge: I18N_LOCALE_COOKIE_MAX_AGE_SECONDS,
      sameSite: "lax",
      path: "/",
    })
    return data
  })
