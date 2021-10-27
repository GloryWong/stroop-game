import Model, { Props as ModelProps } from './common/Model'
import { useTranslation } from '../i18n'

export default function Intro({ visible, setVisible }: ModelProps) {
  const { t } = useTranslation()
  return (
    <Model
      config={{ title: t('intro.intro') }}
      visible={visible}
      setVisible={setVisible}
    >
      <div className=" w-56 flex flex-col justify-center text-left">
        <div className="mb-5">
          <p className="font-medium">
            <a
              href="https://en.wikipedia.org/wiki/Stroop_effect"
              target="_blank"
              rel="noreferrer"
            >
              Stroop Effect:
            </a>
          </p>
          In psychology, the Stroop effect is the delay in reaction time between
          congruent and incongruent stimuli. This game is a test for SCWT(Stroop
          Color and Word Test).
        </div>
        <div className="mb-5">
          <div>
            ☎️&nbsp;Contact:&nbsp;
            <a className="underline" href="mailto:glorywong1001@gmail.com">
              glorywong1001@gmail.com
            </a>
          </div>
          <div>
            🐙&nbsp;Github:&nbsp;
            <a
              className="underline"
              href="https://github.com/GloryWong/stroop-game"
              target="_blank"
              rel="noreferrer"
            >
              stroop-game
            </a>
          </div>
        </div>
        <div>Have fun, buddy!</div>
      </div>
    </Model>
  )
}
