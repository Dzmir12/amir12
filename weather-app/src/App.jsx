

import Search from './components/Search/Search';
import './App.css';
import { useEffect, useState } from 'react';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import { DateTime } from 'luxon';
import AirPollution from './components/AirPollution/AirPollution';
import WeatherExtraInfo from './components/WeatherExtraInfo/WeatherExtraInfo';
import visibility from './assets/visibility.png';
import feelslike from './assets/feelslike.png';
import humidity from './assets/icons8-humidity-100.png';
import pressure from './assets/icons8-pressure-100.png';
import { useMediaQuery } from 'react-responsive';
import style from './App.module.css'


// d97bc62f9eff20bb74dc4624c875f7d5

function App() {
  const [search, setSearch] = useState('germany');
  const [weatherinfo, setWeatherInfo] = useState(null);
  const [sunriseTimestamp, setSunriseTimestamp] = useState(null);
  const [airPollution, setAirPollution] = useState(null);


  const isWeb = useMediaQuery({ query: '(max-width: 1300px)' });
  const isWeb2 = useMediaQuery({ query: '(max-width: 916px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 604px)' });

  useEffect(() => {
    // for weatherinfo
    if (search.length > 3) {
      const apikey = "9f7872b066b5bc44af38adc94f889937";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apikey}&units=metric`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setWeatherInfo(data);

          if (data.sys && data.sys.sunrise) {
            // const sunriseUtc = DateTime.fromSeconds(data.sys.sunrise).toUTC();
            // const localTimezone = DateTime.local().zoneName;

            // // Convert the sunrise time to the local time zone
            // const localSunrise = sunriseUtc.setZone(localTimezone);
            // const sunriseTime = localSunrise.toLocaleString(DateTime.TIME_24_SIMPLE);

            // console.log('Sunrise Time:', sunriseTime);
            // setSunriseTimestamp(sunriseTime);
            //  humanreadable sunrise timestamp
            const sunriseDate = new Date(data.sys.sunrise * 1000);
            const sunriseTime = sunriseDate.toLocaleTimeString('en-US', {
             hour: '2-digit',
            minute: '2-digit',
              });
              setSunriseTimestamp(sunriseTime);
          }

        }).catch((error) => {
          console.error('API Request Error:', error);
        });
          
    }


  }, [search]);

 
    //  for airpollution
 
  useEffect(() => {
    if (weatherinfo && weatherinfo.coord) {
      const apikey = "9f7872b066b5bc44af38adc94f889937";
      const pollutionUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${weatherinfo.coord.lat}&lon=${weatherinfo.coord.lon}&appid=${apikey}`;

      fetch(pollutionUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setAirPollution(data);
        })
        .catch((error) => {
          console.error('API Request Error:', error);
        });
    }
  }, [weatherinfo]);


  return (
    <div className="app">
      <Search search={search} setSearch={setSearch} />
      <div className={` ${isWeb2 ? style.rowFixed  : style.row }`}>
        <WeatherInfo weatherinfo={weatherinfo} sunriseTimestamp={sunriseTimestamp} search={search} />
        <AirPollution search={search} airPollution={airPollution}  weatherinfo={weatherinfo} />
      </div>

      <div className={` ${isWeb ? style.WeatherExtraInfoContainerFixed  : style.WeatherExtraInfoContainer} `}>
        <div className={` ${isWeb ? style.WeatherExtraInfoSecondContainerFixed  : style.WeatherExtraInfoSecondContainer } ${isTablet ? style.WeatherExtraInfoSecondContainerFixedi  : style.WeatherExtraInfoSecondContainer }`}>
         <WeatherExtraInfo image={humidity} text='Humidity :'  number={`${weatherinfo?.main?.humidity}`} text2="%"  search={search}  weatherinfo={weatherinfo}/>
         <WeatherExtraInfo image={pressure} text='Pressure :'  number={`${weatherinfo?.main?.pressure}`} text2="hPa" search={search}  weatherinfo={weatherinfo}/>
        </div>
        
        <div  className={` ${isWeb ? style.WeatherExtraInfoSecondContainerFixed  : style.WeatherExtraInfoSecondContainer } ${isTablet ? style.WeatherExtraInfoSecondContainerFixedi  : style.WeatherExtraInfoSecondContainer }`}>
         <WeatherExtraInfo image={visibility} text='Visibility :'  number={`${(weatherinfo?.visibility)/1000}`} text2="Km" search={search}  weatherinfo={weatherinfo}/>
         <WeatherExtraInfo image={feelslike} text='Feels like :'  number={`${weatherinfo?.main?.feels_like}`} text2="°C" search={search}  weatherinfo={weatherinfo}/>
        </div>

      </div>


    </div>
  );
}

export default App;
