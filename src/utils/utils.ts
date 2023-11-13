import type { IAstro, IForecastday, IDay, TAverageItem } from './types'

const debounce = (func: Function, timeout = 500) => {
  let timer: number
  return (...args: any) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}

const formatDate = (date: string) => {
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }

  const currDate = new Date(date)

  const mins =
    currDate.getUTCMinutes() < 10 ? currDate.getUTCMinutes() + '0' : currDate.getUTCMinutes()
  return (
    currDate.getHours() + ':' + mins + ' - ' + new Date(date).toLocaleDateString('en-US', options)
  )
}

//todo
const getAverageData = (forecast: IForecastday): TAverageItem[] => {
  // const averageData = [
  //   {
  //     icon: 'Sunrise',
  //     key: 'sunrise'
  //   },
  //   {
  //     icon: 'Sunset',
  //     key: 'sunset'
  //   },
  //   { icon: 'Thermometer', key: 'maxtemp_c', fill: 'red' },
  //   { icon: 'Thermometer', key: 'mintemp_c', fill: 'blue' },
  //   { icon: 'Rain', key: 'daily_chance_of_rain' },
  //   { icon: 'Snow', key: 'daily_chance_of_snow' }
  // ]

  // const res: TAverageItem[] = sunData.map((el) => {
  //   const temp = {
  //     icon: el.icon,
  //     value: forecast.astro[el.key as keyof IAstro] || forecast.day[el.key as keyof IDay]
  //   }
  //   if (el.fill) temp.fill = el.fill
  //   return el
  // })
  return res
}

export { debounce, formatDate, getAverageData }
