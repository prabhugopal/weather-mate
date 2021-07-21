import React from 'react';
import WeatherCard from './WeatherCard';
import appConfig from '../appconfig.json';

function Main () {
    //navigator.geolocation.getCurrentPosition(position => console.log(position.coords) )
    return (        
    <div className="container mx-auto">
        <WeatherCard city = {appConfig.city}/>
        <div className="h-10"></div>
    </div>
    )
}

export default Main;
