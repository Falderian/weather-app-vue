import type { ILocation } from './types'

class Api {
  base = 'https://vast-pear-panda-slip.cyclic.app/api/'
  extra = this.base + 'extra/'
  weather = this.base + 'weather/'

  options(payload: { location: string; days?: number }) {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(payload)
    }
  }

  public async searchLocation(location: string): Promise<ILocation[]> {
    return (await fetch(this.extra + 'search/' + location)).json()
  }

  public async getForecastWeather(location: string, days: number) {
    return (await fetch(this.weather + 'forecast', this.options({ location, days }))).json()
  }
}

export default new Api()
