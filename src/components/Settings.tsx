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

  return (
    <div
      className={`model absolute flex justify-center items-center w-screen h-screen bg-opacity-30 bg-black transition transform ${
        visible ? 'scale-100' : 'scale-0'
      }`}
    >
      <div
        className={`container p-5 shadow-lg rounded-3xl bg-gray-100 w-11/12 sm:w-9/12 md:w-60
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
              >
                <option value="en">
                  🇬🇧&nbsp;&nbsp;{t('english')}&nbsp;(English)
                </option>
                <option value="cn">
                  🇨🇳&nbsp;&nbsp;{t('chinese')}&nbsp;(中文)
                </option>
                <option value="mm">
                  🇲🇲&nbsp;&nbsp;{t('myanmar')}&nbsp;(ဗမာ)
                </option>
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
