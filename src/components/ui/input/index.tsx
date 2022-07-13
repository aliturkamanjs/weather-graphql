import clsx from 'clsx'
import { ChangeEvent, memo } from 'react'
import { RiSearch2Line } from 'react-icons/ri'

import { useSelector } from 'react-redux'

interface inputProps {
  placeholder?: string
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
  value?: string
}

export const Input = ({
  placeholder,
  handleChange,
  value,
}: inputProps): JSX.Element => {
  const state = useSelector((state: stateProps) => state)

  return (
    <div className="relative w-full sm:w-auto flex items-center">
      <RiSearch2Line
        className={clsx(
          'absolute left-2',
          state.isLight ? 'text-black' : ' text-white'
        )}
      />
      <input
        className={clsx(
          'border-[1.5px] w-full sm:w-64 bg-transparent rounded-md pl-8 px-3 py-[3px] focus:outline-none focus:shadow-outline',
          state.isLight
            ? 'placeholder:text-black border-black text-black'
            : 'placeholder:text-white border-white text-white'
        )}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  )
}

// export default memo(Input)
