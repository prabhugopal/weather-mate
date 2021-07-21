import appConfig from '../appconfig.json';


export let utils = {
    TimeUtils : {
        getDate : function(dt:number) {
            return new Date(dt * 1000)
        },
    },
    MisUtils : {

        getWind: function(wind: number) {
            const unit = appConfig.unit;
            if(unit === 'imperial' ) {
                return (wind * 2.24).toFixed(2)+ " mph"
            }
            if(unit === 'metrics') {
                return (wind * 3.6).toFixed(2) + " kmph"
            }
            return wind;
        },
        getVisibility: function(dist: number) {
            const unit = appConfig.unit;
            if(unit === 'imperial' ) {
                return (dist * 0.000621).toFixed(2) + " mi"
            }
            if(unit === 'metrics') {
                return (dist * 0.001).toFixed(2) + " km"
            }
            return dist;
        },
        getPressure: function(dist: number) {
            return (dist * 0.02953).toFixed(2) + " inHg"
        }
    }
}