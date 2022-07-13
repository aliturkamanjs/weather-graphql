import axios from 'axios'
import { useEffect, useState } from 'react'

const client = axios.create({
  baseURL: 'https://ipapi.co/json/',
})

export const useGetIp = () => {
  const [ip, setIp] = useState<ipProps>()

  const getIp = async () => {
    try {
      const data = await client.get('/')
      setIp(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getIp()
  }, [])

  return { ip }
}
