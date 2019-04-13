import React, { useReducer, useEffect, useState } from 'react'
import Reducer from './reducer'

import TopComponent from '../components/Top'
import BottomComponent from '../components/Bottom'

const weatherKey = "4cb1f2b145e84946af3163246193003";
const cityName = 'Chisinau'

export default function Store() {
  const [isLoading, setLoading] = useState(true)
  const [global, dispatch]
    = useReducer(Reducer, {})

  const url = `
    http://api.apixu.com/v1/forecast.json?key=${weatherKey}&q=${cityName}&days=5`
  
  async function getWeatherInfo() {
    try {
        const payload = await fetch(url, { method: 'GET' })
        const data = await payload.json()
      if (data) {
        dispatch({
          type: 'onload',
          today:{
            location: data.location,
            current: data.current,
            condition: data.current.condition
          },
          view:{
            location: data.location,
            current: data.current,
            condition: data.current.condition
          },
          forecast: data.forecast.forecastday,
          isToday: true,
        })
          setLoading(false)
        }
      } catch (error) {
        console.error(error)
    }
  }  
  useEffect(() => {
    getWeatherInfo()
  }, [])

  async function handleButtonClick() {
    const cityName= prompt ('Enter location: ')
    const url = `http://api.apixu.com/v1/forecast.json?key=${weatherKey}&q=${cityName}&days=5`
    try {
      const payload = await fetch(url, { method: 'GET' })
      const data = await payload.json()
      if (data) {
        dispatch({
          type: 'handleLocationSelect',
          today: {
            location: data.location,
            current: data.current,
            condition: data.current.condition,
          },
          view: {
            location: data.location,
            current: data.current,
            condition: data.current.condition,
          },
          forecast: data.forecast.forecastday,
        })
        setLoading(false)
      }
    } catch (error) {
      console.error(error)
    }
  }
  function handleDaySelection(index)
  {
    if (index !== 0)
    {
      dispatch
        ({
        type: 'handleDAYSelect',
          index: index,
        isToday: false
       })
    }
    else
    {
      dispatch
        ({
        type: 'setToday',
        isToday: true
        })
    }
  }

  return (
    < >
      <TopComponent
        {...global.view}
        isToday={global.isToday}
        isLoading={isLoading}
        onClick={handleButtonClick}
      />
      {isLoading ? null :
      <BottomComponent
        days={global.forecast}
        onDaySelect={handleDaySelection}
      />
      }
    </>
  )
}