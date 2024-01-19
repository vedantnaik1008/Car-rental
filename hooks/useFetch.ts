import { useEffect, useState } from 'react'

const useFetch = () => {
    const [data, setData] = useState([])

  useEffect(()=> {
    const fetchCars = async () => {
      const response = await fetch(`/api/cars`)
      const data = await response.json()
      setData(data)
    }
    fetchCars()
  }, [])
  return {data}
}

export default useFetch
