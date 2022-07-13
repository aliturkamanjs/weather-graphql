import { Input } from '../ui/input'

import { RiSettingsLine } from 'react-icons/ri'
import { IoIosArrowBack } from 'react-icons/io'

import { ChangeEvent, useEffect, useState } from 'react'
import { Sidebar } from '../ui/sidebar'
import { Themes } from '../themes'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import toast, { Toaster } from 'react-hot-toast'
import { useQuery } from '@apollo/client'
import { GET_WEATHER } from '../../graphql/querys'
import { showTime } from '../../utils/getTime'
import { useGetIp } from '../../hooks/useGetIp'
import { getDate } from '../../utils/getDate'
import { Spinner } from '../ui/spinner'

export const Home = (): JSX.Element => {
  const [city, setCity] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const state = useSelector((state: stateProps) => state)
  const { ip } = useGetIp()
  const { data, error, loading } = useQuery(GET_WEATHER, {
    variables: { name: city },
  })

  useEffect(() => {
    if (ip?.data) {
      setCity(ip?.data?.city)
    }
  }, [ip])

  useEffect(() => {
    if (city === '') {
      if (ip?.data) {
        setCity(ip?.data?.city)
      }
    }
  }, [city])

  const openSidebar = () => {
    setIsOpen(true)
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }

  if (error) {
    toast.error(error.message, {
      position: 'top-right',
      duration: 5000,
    })
  }

  return (
    <>
      <div className="w-full flex flex-col justify-between h-screen">
        <div className="flex items-center justify-between px-7 pt-5">
          <div
            className={clsx(
              'hidden sm:block',
              state.isLight ? 'text-black' : 'text-white'
            )}
          >
            <h1 className={clsx('text-2xl ')}>wearher forecast</h1>
            <p className="text-xs ">{getDate()}</p>
          </div>
          <Input
            placeholder="Search"
            handleChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCity(e.target.value)
            }
          />
          <RiSettingsLine
            className={clsx(
              'text-black sm:text-white ml-4 sm:ml-0 mb-0 sm:mb-10 block sm:hidden cursor-pointer text-3xl z-10',
              state.isLight ? 'text-black' : 'text-white'
            )}
            onClick={openSidebar}
          />
        </div>

        <div className="w-full  flex items-end justify-between">
          <div>
            {loading ? (
              <div className="flex items-center justify-center w-screen mb-24">
                <Spinner />
              </div>
            ) : (
              ''
            )}
            {data && (
              <div className="">
                <div className="flex flex-col-reverse sm:flex-row justify-center items-center space-x-3 ml-10 text-white">
                  <div className="mr-4">
                    {data?.getCityByName?.weather?.temperature.actual && (
                      <h1 className="text-9xl sm:text-[200px] relative">
                        {Math.ceil(
                          data?.getCityByName?.weather?.temperature.actual -
                            273.15
                        )}
                        °
                      </h1>
                    )}
                  </div>

                  <div className="flex flex-col mt-4">
                    <p className="mb-0 sm:mb-6 text-md">{showTime()}</p>
                    <h1 className="text-2xl sm:text-6xl">
                      {data?.getCityByName?.name}{' '}
                      <span className="text-lg">
                        {data?.getCityByName?.country}
                      </span>
                    </h1>
                    <p className="text-xs sm:text-xl mt-1">
                      {data?.getCityByName?.weather?.summary.title}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <RiSettingsLine
            className="text-white mb-10 hidden sm:block cursor-pointer mr-10 text-3xl z-10"
            onClick={openSidebar}
          />
        </div>
      </div>
      <span className="absolute right-0 left-0 bottom-0 h-60 blur-3xl opacity-50 -z-10 bg-black"></span>
      <Sidebar
        isOpen={isOpen}
        closeSidebar={closeSidebar}
        children={
          <div className="px-4 pt-6">
            <div className="flex items-center space-x-1 text-2xl mb-10">
              <IoIosArrowBack
                onClick={closeSidebar}
                className="cursor-pointer"
              />
              <h1>Setting</h1>
            </div>

            <Themes />
          </div>
        }
      />
      <Toaster />
    </>
  )
}
