import { useContext } from 'react'
import { PRIMARY_ELEMENTS } from '../constants'
import { Store } from '../context'

export default function Cards() {
  const { dispatch } = useContext(Store)

  function createCards() {
    return PRIMARY_ELEMENTS.map(({ color, value }) => (
      // eslint-disable-next-line jsx-a11y/control-has-associated-label
      <button
        key={value.appearance}
        type="button"
        className={`bg-${color} rounded-3xl shadow hover:shadow-md transform scale-100 hover:scale-110 transition-all`}
        onClick={() => handleClick(value.appearance)}
      />
    ))
  }

  function handleClick(value: number) {
    ;(dispatch as React.Dispatch<any>)({
      type: 'FILL_ANSWER',
      payload: value,
    })
    ;(dispatch as React.Dispatch<any>)({
      type: 'VERIFY_ANSWER',
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
