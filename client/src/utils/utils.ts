const apiUrl = 'https://vast-pear-panda-slip.cyclic.app/api/'

const debounce = (func: Function, timeout = 500) => {
  let timer: number
  return (...args: any) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}

export { apiUrl, debounce }
