import { useTranslation } from '../../i18n'

export type Props = {
  visible: boolean
  setVisible: (value: boolean) => void
  config?: {
    title: string
  }
  children?: React.ReactNode
}

export default function Model(props: Props) {
  const { config, visible, setVisible, children } = props
  const { t } = useTranslation()
  return (
    <div
      className={`model absolute text-gray-900 dark:text-gray-500 flex justify-center items-center w-screen h-screen bg-black transition-all transform ${
        visible
          ? 'scale-100 bg-opacity-30 dark:bg-opacity-60'
          : 'scale-0 bg-opacity-0 dark:bg-opacity-0'
      }`}
    >
      <div
        className={`container max-h-full p-5 shadow-lg rounded-3xl bg-bg dark:bg-bg-dark w-max max-w-full
    `}
      >
        <div className="head relative h-5">
          <div className="title font-bold text-xl absolute left-0">
            {config?.title}
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
        <div className="body h-full mt-10 mb-10 overflow-x-hidden overflow-y-auto">
          {children}
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
