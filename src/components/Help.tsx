import Model, { Props as ModelProps } from './common/Model'
import { useTranslation, Trans } from '../i18n'

export default function Help({ visible, setVisible }: ModelProps) {
  const { t } = useTranslation()
  return (
    <Model
      config={{ title: t('help.help') }}
      visible={visible}
      setVisible={setVisible}
    >
      <div className="w-80 flex flex-col justify-center text-left">
        <div>
          <h1 className="font-medium">Basic Rules</h1>
          <p>
            Following the question, choose a correct card in the 4 color cards
            right below the question.
          </p>
          <p>For example, if the question is:</p>
          <p className="text-center w-full">
            <Trans i18nKey="question">
              The
              <span className="underline font-bold">{{ target: 'color' }}</span>
              &nbsp;of the&nbsp;
              <span className="text-red dark:text-red-dark font-bold">
                {{ descriptionText: t('green') }}
              </span>
              &nbsp;is?
            </Trans>
          </p>
          <p>You have to choose the red card as correct answer.</p>
          <p>Or if the question is:</p>
          <p className="text-center w-full">
            <Trans i18nKey="question">
              The
              <span className="underline font-bold">
                {{ target: 'meaning' }}
              </span>
              &nbsp;of the&nbsp;
              <span className="text-blue dark:text-blue-dark font-bold">
                {{ descriptionText: t('yellow') }}
              </span>
              &nbsp;is?
            </Trans>
          </p>
          <p>You have to choose the yellow card as correct answer.</p>
          <h1 className="font-medium mt-5">Difficultis</h1>
          <ul className="">
            <li>{t('easy')}: test word color</li>
            <li>{t('normal')}: test word meaning</li>
            <li>{t('hard')}: mix test randomly</li>
          </ul>
          <h1 className="font-medium mt-5">Score</h1>
          <p>Score increases by 1 if you choose the correct card;</p>
          <p>otherwise, the score decreases by 1.</p>
          <h1 className="font-medium mt-5">Game End</h1>
          <p>
            The progress bar (countdown) reach the end or your score decreases
            to negative.
          </p>
        </div>
      </div>
    </Model>
  )
}
