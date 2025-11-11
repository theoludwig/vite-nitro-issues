import { useLocale, useTranslations } from "use-intl"
import type { I18nLocale } from "../../i18n/i18n.ts"
import { I18N_LOCALES } from "../../i18n/i18n.ts"
import { classNames } from "../../utils/classNames.ts"
import "../../i18n/i18n.server.ts"

export interface I18nProps {
  onI18nChange: (locale: I18nLocale) => Promise<void>
}
export const I18n: React.FC<I18nProps> = (props) => {
  const { onI18nChange } = props
  const t = useTranslations()
  const i18nLocaleCurrent = useLocale()

  return (
    <div className="my-6">
      <h2>i18n: {t("hello")}</h2>

      <ul className="my-2 flex gap-4">
        {I18N_LOCALES.map((i18nLocale) => {
          const isCurrent = i18nLocale === i18nLocaleCurrent

          return (
            <li
              key={i18nLocale}
              className={classNames("p-2", {
                "border-2 border-blue-600": isCurrent,
              })}
            >
              <button
                onClick={async () => {
                  await onI18nChange(i18nLocale)
                }}
              >
                {t(`locales.${i18nLocale}`)}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
