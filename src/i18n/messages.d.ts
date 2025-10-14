import type { I18nLocale } from "./i18n.ts"
import type messages from "./translations/en-GB.json"

declare module "use-intl" {
  interface AppConfig {
    Locale: I18nLocale
    Messages: typeof messages
  }
}
