import { useContext } from 'react'
import { Store } from '../context'
import { useTranslation, Trans } from '../i18n'

export default function Title() {
  const { state } = useContext(Store)
  const { question } = state
  const { t } = useTranslation()

  return (
    <div className="text-gray-900 dark:text-gray-300">
      <Trans i18nKey="question">
        The
        <span className="underline font-bold">
          {{ target: t(question.target) }}
        </span>
        &nbsp;of the&nbsp;
        <span
          className={`${question.color} dark:${question.darkColor} font-bold`}
        >
          {{ descriptionText: t(question.descriptionText.toLowerCase()) }}
        </span>
        &nbsp;is?
      </Trans>
      {/* The <span className="font-bold">{question.target}</span> of the&nbsp;
      <span className={`${question.color} font-bold`}>
        {question.descriptionText}
      </span>
      &nbsp;is? */}
    </div>
  )
}
