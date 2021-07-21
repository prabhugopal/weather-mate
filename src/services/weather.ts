import appConfig from '../appconfig.json';
import { Location } from '../models/city';


export function getTemprature(location: Location) {
    const lon = location.city.coord.lon
    const lat = location.city.coord.lat
    const queryString = `?lat=${lat}&lon=${lon}&units=${appConfig.unit}&appid=${appConfig.apiKey}`

    console.log("Fetching for " + location.city.name + " @ " + new Date().toLocaleTimeString())

    return fetch(appConfig.apiUrl+queryString)
      .then(response => {
        if(response.ok)
            return response.json()
        })
      .then(data => {
          return data;
        })
    }