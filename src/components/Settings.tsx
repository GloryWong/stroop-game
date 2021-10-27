/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent } from 'react'
import i18n, { useTranslation } from '../i18n'
import useTheme from '../hooks/useTheme'
import Model, { Props as ModelProps } from './common/Model'

export default function Settings({ visible, setVisible }: ModelProps) {
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
    <Model
      visible={visible}
      setVisible={setVisible}
      config={{ title: t('settings') }}
    >
      {settingConfig.map(({ title, name, handleChange, value, options }) => {
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
      })}
    </Model>
  )
}
