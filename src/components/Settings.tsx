/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent } from 'react'
import i18n, { useTranslation } from '../i18n'

function changeLanguage(lng: string) {
  i18n.changeLanguage(lng)
}

type Props = {
  visible: boolean
  setVisible: (value: boolean) => void
}

export default function Settings({ visible, setVisible }: Props) {
  function handleLanguageChange(e: ChangeEvent) {
    changeLanguage((e.target as HTMLSelectElement).value)
  }

  const { t } = useTranslation()
  const languageOptions = [
    {
      flag: '🇬🇧',
      value: 'en',
      name: t('english'),
      rawName: 'English',
    },
    {
      flag: '🇨🇳',
      value: 'cn',
      name: t('chinese'),
      rawName: '中文',
    },
    {
      flag: '🇲🇲',
      value: 'mm',
      name: t('myanmar'),
      rawName: 'ဗမာ',
    },
  ]
  const { resolvedLanguage } = i18n

  return (
    <div
      className={`model absolute flex justify-center items-center w-screen h-screen bg-black transition-all transform ${
        visible ? 'scale-100 bg-opacity-30' : 'scale-0 bg-opacity-0'
      }`}
    >
      <div
        className={`container p-5 shadow-lg rounded-3xl bg-gray-100 w-80
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
          <label className="w-full h-full flex justify-center items-center">
            <div className="title mr-3 font-medium">{t('language')}</div>
            <div className="form-control">
              <select
                className="form-control"
                name="language"
                onChange={handleLanguageChange}
                value={resolvedLanguage}
              >
                {languageOptions.map(({ flag, value, name, rawName }) => (
                  <option key={value} value={value}>
                    {flag}&nbsp;&nbsp;{name}&nbsp;({rawName})
                  </option>
                ))}
              </select>
            </div>
          </label>
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
