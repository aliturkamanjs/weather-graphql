import clsx from 'clsx'
import { useSelector } from 'react-redux'

export const Layout = ({ children }: any ): JSX.Element => {
  const state = useSelector((state: stateProps) => state)

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div
        className={clsx(
          'w-screen h-screen object-cover bg-cover -z-20 absolute bg-darkwhite',
          state.background
        )}
      ></div>
      {children}
    </div>
  )
}
