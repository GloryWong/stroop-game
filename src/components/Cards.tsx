import { useContext } from 'react'
import { PRIMARY_ELEMENTS } from '../constants'
import { Store } from '../context'

export default function Cards() {
  const { dispatch } = useContext(Store)

  function createCards() {
    const cardModifies = [
      {
        noneRounded: 'rounded-br-none',
        transformOrigin: 'origin-bottom-right',
      },
      {
        noneRounded: 'rounded-bl-none',
        transformOrigin: 'origin-bottom-left',
      },
      {
        noneRounded: 'rounded-tr-none',
        transformOrigin: 'origin-top-right',
      },
      {
        noneRounded: 'rounded-tl-none',
        transformOrigin: 'origin-top-left',
      },
    ]
    return PRIMARY_ELEMENTS.map(({ bgColor, darkBgColor, value }, index) => {
      const { noneRounded, transformOrigin } = cardModifies[index]

      return (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button
          key={value.appearance}
          type="button"
          className={`${bgColor} dark:${darkBgColor} rounded-3xl ${noneRounded} shadow hover:shadow-md transform ${transformOrigin} scale-100 hover:scale-110 transition-all`}
          onClick={() => handleClick(value)}
        />
      )
    })
  }

  function handleClick(value: any) {
    ;(dispatch as React.Dispatch<any>)({
      type: 'FILL_ANSWER',
      payload: value,
    })
    ;(dispatch as React.Dispatch<any>)({
      type: 'VERIFY_ANSWER',
    })
    ;(dispatch as React.Dispatch<any>)({
      type: 'CREATE_QUESTION',
    })
  }

  return (
    <div>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 h-52 w-52 ml-auto mr-auto mt-10 mb-10">
        {createCards()}
      </div>
    </div>
  )
}
