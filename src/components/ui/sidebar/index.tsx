import clsx from 'clsx'
import { ReactNode } from 'react'

interface sidebarProps {
  children?: ReactNode
  isOpen?: boolean
  closeSidebar?: () => void
}

export const Sidebar = ({
  children,
  isOpen,
  closeSidebar,
}: sidebarProps): JSX.Element => {
  return (
    <>
      <div
        className={clsx(
          'fixed inset-0 bg-black bg-opacity-40',
          isOpen ? 'fixed' : 'hidden'
        )}
        onClick={closeSidebar}
      ></div>

      <div
        className={clsx(
          'fixed transform right-0 top-0 z-30 bottom-0 w-80 bg-white ease-in-out transition-all duration-300 h-screen overflow-y-auto',
          isOpen ? 'translate-x-0 ' : 'translate-x-full'
        )}
      >
        {children}
      </div>
    </>
  )
}
