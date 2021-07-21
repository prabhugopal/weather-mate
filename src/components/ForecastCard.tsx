import React, {FC, useEffect, useState} from 'react';
import appConfig from '../appconfig.json';


const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];



const DailyCard: FC<any> = (props: any) => {
    const day = new Date(props.data.dt * 1000).getDay()
    const imageUrl = appConfig.iconUrl + props.data.weather[0].icon + '@2x.png'

    return  <div  className="px-4 py-10 bg-white border-0 rounded shadow-lg bg-opacity-25">
                <div className="text-xl">{days[day]}</div>
                <div className="h-2 border-b-2 border-indigo-100 border-opacity-40"></div>
                <div className="grid lg:grid-cols-2 py-3">
                    <div className="flex flex-row"> 
                        <div className="h-4 text-2xl text-opacity-100 font-black	">&#710;
                        </div>
                        <div className="text-opacity-100 text-red-700  py-3">
                            {Math.floor(props.data.temp.max)}
                        </div>
                        <div className="text-opacity-100 text-red-700">
                            <span className="text-xs text-left text-top">o</span>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="h-4 text-2xl text-opacity-100 font-black	">
                           &#711; 
                        </div>
                        <div className="text-opacity-50 text-blue-700  py-3">
                            {Math.floor(props.data.temp.min)}
                        </div>
                        <div className="text-opacity-50 text-blue-700">
                            <span className="text-xs text-left text-top">o</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>{props.data.weather[0].main}</div>
                    <div><img className="object-scale-down h-10 bg-transparent" src={imageUrl} alt={props.data.weather[0].main} /> </div>
                </div>
            </div> 
}


const ForecastCard: FC<any> = (props: any) => {

    const dailyList =  props.temps.map( (temp:any) =>  <DailyCard data={temp} key={temp.dt}/> )

    return <div className="grid gap-4 lg:grid-cols-8">
                {dailyList}
           </div>
}

export default ForecastCard;

