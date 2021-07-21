import React, {FC, useEffect, useState} from 'react';
import { Location } from '../models/city';
import { getTemprature } from '../services/weather';
import ForecastCard from './ForecastCard';
import appConfig from '../appconfig.json';
import  { utils }  from '../services/utils'


const LocationCard: FC<Location> = (props: Location) => {
     if(props.city.state) {
        return <div className="w-32 p-4">
             <span className="text-4xl text-justify	whitespace-nowrap"> { props.city.name } </span>
             <span className="text-2xl text-opacity-50"> { props.city.state }, </span>
             <span className="text-lg text-opacity-60"> { props.city.country } </span>
           </div>
     } else {
          return <div className="w-32 p-4">
             <span className="text-4xl text-justify	whitespace-nowrap"> { props.city.name } </span>
             <span className="text-lg text-opacity-60"> { props.city.country } </span>
           </div>
     }
}

const TimeCard: FC<any> = (props: any) => {
    const date =  utils.TimeUtils.getDate(props.time);
    return <div className="w-50 p-6 object-right content-end text-right">
            <div>
                <span className="text-xl text-justify whitespace-nowrap"> {date.toDateString()} </span>
            </div>
            <div>
                <span className="text-xl text-justify whitespace-nowrap"> {date.toLocaleTimeString()} </span>
            </div>
           </div>
}

const ConditionCard: FC<any> = (props: any) => {
    const imageUrl = appConfig.iconUrl + props.weather.icon + '@2x.png'

    return <div className="flex flex-row items-end p-0">    
                <div className="inline align-bottom">
                 <img className="object-scale-down h-10 bg-transparent" src={imageUrl} alt={props.weather.main} /> 
                </div>    
                <div className="inline align-center">
                 <span className="text-xl align-text-bottom capitalize">{props.weather.description}</span>
                </div> 
            </div>
}

const TemperatureCard: FC<any> = (props: any) => {

    return <div className="flex flex-row items-end p-2 space-x-1"> 
    <div className="inline align-bottom">
        <span className="text-9xl subpixel-antialiased	align-text-bottom">{Math.floor(props.temp)}</span>
    </div>
    <div className="inline align-top">
        <div className="flex flex-col align-top">
            <div className="inline align-bottom">
                <span className="text-5xl align-text-bottom">o</span>
            </div> 
            <DegreeCard unit = {appConfig.unit} />
            <div className="inline align-top">
                <span className="text-5xl align-text-bottom">&nbsp;</span>
            </div> 
        </div>
    </div>  
</div> 
}

const DegreeCard: FC<any> = (props: any) => {
    if(props.unit === 'imperial') {
        return <div className="inline align-top">
                <span className="text-5xl align-text-bottom">F</span>
               </div> 
    } 
    if(props.unit === 'metric') {
        return <div className="inline align-top">
                <span className="text-5xl align-text-bottom">C</span>
               </div> 
    }
    return <div></div>
}

const WeatherCard: FC<Location> = (props: Location) => {
    const [current, setCurrent] = useState(  { dt: 0, temp : 0.0, weather:[{icon: "", main : "", description:""}]});
    const [forecast, setForecast] = useState([]);
    const location : Location = props 
    useEffect(() =>  {
        getTemprature(location)
        .then(
            data=> {
                setCurrent(data.current)
                console.log(data.current.weather[0].main)
                setForecast(data.daily)
            }
        )
    }, [])
    
    return <div>
                <div>
                    <div className="grid grid-cols-2 border-b-2 h-25 border-purple-100 border-opacity-40">
                        <LocationCard city = {props.city} />
                        <TimeCard time = {current.dt} />
                    </div>
                    <ConditionCard weather = {current.weather[0]} />
                    <TemperatureCard temp = {current.temp} />        
                </div>
                <div className="border-1 border-blue-200 border-opacity-40 px-4 py-10 bg-gradient-to-r from-green-300 to-blue-400 bg-opacity-90	">
                    <div className="border-t-2 border-purple-100 border-opacity-40 ">
                        <div className=" h-4"></div>
                        <div><h3 className="text-3xl">Forecast</h3></div>
                        <div className=" h-4"></div>
                        <ForecastCard temps = {forecast} />
                    </div>
                </div>
            </div>

}

export default WeatherCard;