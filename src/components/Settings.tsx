/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent } from 'react'
import i18n, { useTranslation } from '../i18n'
import useTheme from '../hooks/useTheme'

type Props = {
  visible: boolean
  setVisible: (value: boolean) => void
}

export default function Settings({ visible, setVisible }: Props) {
  const { t } = useTranslation()
  const { theme, setTheme } = useTheme()

  const settingConfig = [
    {
      title: t('language'),
      name: 'language',
      handleChange: (e: ChangeEvent) => {
        i18n.changeLanguage((e.target as HTMLSelectElement).value)
      },
      value: i18n.resolvedLanguage,
      options: [
        {
          value: 'en',
          content: `🇬🇧   ${t('english')} (English)`,
        },
        {
          value: 'cn',
          content: `🇨🇳   ${t('chinese')} (中文)`,
        },
        {
          value: 'mm',
          content: `🇲🇲   ${t('myanmar')} (ဗမာ)`,
        },
      ],
    },
    {
      title: t('appearence.theme'),
      name: 'theme',
      handleChange: (e: ChangeEvent) => {
        setTheme((e.target as HTMLSelectElement).value)
      },
      value: theme,
      options: [
        {
          value: 'default',
          content: t('appearence.default'),
        },
        {
          value: 'dark',
          content: t('appearence.dark'),
        },
        {
          value: 'auto',
          content: t('appearence.auto'),
        },
      ],
    },
  ]

  return (
    <div
      className={`model absolute text-gray-900 dark:text-gray-500 flex justify-center items-center w-screen h-screen bg-black transition-all transform ${
        visible
          ? 'scale-100 bg-opacity-30 dark:bg-opacity-60'
          : 'scale-0 bg-opacity-0 dark:bg-opacity-0'
      }`}
    >
      <div
        className={`container p-5 shadow-lg rounded-3xl bg-bg dark:bg-bg-dark w-max max-w-full
        `}
      >
        <div className="head relative h-5">
          <div className="title font-bold text-xl absolute left-0">
            {t('settings')}
          </div>
          <button
            type="button"
            className="close absolute right-0"
            onClick={() => {
              setVisible(false)
            }}
          >
            X
          </button>
        </div>
        <div className="body mt-10 mb-10">
          {settingConfig.map(
            ({ title, name, handleChange, value, options }) => {
              return (
                <label
                  key={value}
                  className="w-full h-full flex justify-start items-center pb-2"
                >
                  <div className="title mr-3 font-medium w-24 text-right">
                    {title}
                  </div>
                  <div className="form-control w-40 text-left">
                    <select
                      className="form-control"
                      name={name}
                      onChange={handleChange}
                      value={value}
                    >
                      {options.map(({ value: optionValue, content }) => (
                        <option key={optionValue} value={optionValue}>
                          {content}
                        </option>
                      ))}
                    </select>
                  </div>
                </label>
              )
            }
          )}
        </div>
        <div className="foot relative h-5">
          <button
            type="button"
            className="close font-semibold absolute right-0"
            onClick={() => setVisible(false)}
          >
            {t('close')}
          </button>
        </div>
      </div>
    </div>
  )
}
