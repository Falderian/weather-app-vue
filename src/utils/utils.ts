import type { Ref } from 'vue'

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

export { debounce, formatDate }
