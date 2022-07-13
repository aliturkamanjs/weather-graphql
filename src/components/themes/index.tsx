import clsx from 'clsx'
import { useState } from 'react'
import { themeData } from '../../data/themeData'
import { useDispatch } from 'react-redux'

export const Themes = (): JSX.Element => {
  const [background, setBackground] = useState<string>('bg-darkwhite')
  const dispatch = useDispatch()

  const handleClick = (backgroundKey: string) => {
    setBackground(backgroundKey)
    dispatch({ type: 'SET_BACKGROUND', payload: backgroundKey })
  }

  return (
    <>
      {themeData?.map((item) => {
        return (
          <div
            className={clsx(
              'pl-3 border-l py-3',
              background === item.backgroundKey ? ' border-l-black' : ''
            )}
            onClick={() => handleClick(item.backgroundKey)}
            key={item.id}
          >
            <h1 className="mb-1">{item.title}</h1>
            <div
              className={clsx(
                'w-full h-20 bg-slate-200 rounded-md bg-cover bg-center cursor-pointer',
                item.backgroundKey
              )}
            ></div>
          </div>
        )
      })}
    </>
  )
}
