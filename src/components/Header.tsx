import { useContext } from 'react'
import { Store } from '../context'
import { useTranslation } from '../i18n'

export default function Header() {
  const { state } = useContext(Store)
  const { t } = useTranslation()
  return (
    <div className="w-full text-gray-400 dark:text-gray-600 p-3 flex justify-center items-center">
      <div className="title text-6xl">Stroop</div>
      <div className="score ml-2.5 h-full flex justify-center items-center text-3xl sm:4xl text-gray-700 dark:text-gray-500">
        {t('score')}: {state.score}
      </div>
    </div>
  )
}
