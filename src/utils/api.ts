import type { TLocation } from './types'

class Api {
  base = 'https://vast-pear-panda-slip.cyclic.app/api/'
  extra = this.base + 'extra/'
  weather = this.base + 'weather/'

  options(payload) {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(payload)
    }
  }

  public async searchLocation(location: string): Promise<TLocation[]> {
    return (await fetch(this.extra + 'search/' + location)).json()
  }

  public async getCurrWeather(location: string) {
    return (await fetch(this.weather + 'current', this.options({ location }))).json()
  }
}

export default new Api()
