/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, useContext } from 'react'
import { DIFFICULTY, STATUS, DEFAULT_DIFFICULTY } from '../constants'
import { Store } from '../context'
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
      className={`container absolute shadow-lg rounded-3xl transition transform bg-gray-100 w-3/4 h-3/4 ${
        visible ? 'scale-100' : 'scale-0'
      }`}
    >
      <div className="head relative pt-3 pl-5 pr-5 pb-20 ">
        <div className="title font-bold text-xl absolute left-0 pl-5">
          {t('settings')}
        </div>
        <button
          type="button"
          className="close absolute right-0 pr-5"
          onClick={() => {
            setVisible(false)
          }}
        >
          X
        </button>
      </div>
      <div className="body">
        <label className="w-full h-full flex justify-center items-center">
          <div className="title mr-5 font-medium">{t('language')}</div>
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
    </div>
  )
}
