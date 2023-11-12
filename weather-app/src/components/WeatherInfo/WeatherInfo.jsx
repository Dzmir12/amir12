
import React from 'react';
import style from './WeatherInfo.module.css';
import sun from './../../assets/icons8-sun-500.png';
import sunrise from './../../assets/icons8-sunrise.gif';
import wind from './../../assets/icons8-windsock.gif';
import { useMediaQuery } from 'react-responsive';
import clouds from './../../assets/icons8-clouds-500.png';
import suncloud from './../../assets/icons8-sky-100.png';
import rain from './../../assets/icons8-rain-100.png';
import haze from './../../assets/icons8-haze-100.png';




function WeatherInfo({ weatherinfo, sunriseTimestamp,search }) {
  const isMobile = useMediaQuery({ query: '(min-width: 1300px)' });
  const isWeb2 = useMediaQuery({ query: '(max-width: 916px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 604px)' });

  let weatherImage = null;
  if (search.length < 4) {
    return null; // Hide the component when search length is lower than 3
  }

  if (weatherinfo && weatherinfo.cod === "404" && search.length >= 4) {
    return 'city not found';
  }

  if (weatherinfo && weatherinfo.weather && weatherinfo.weather.length > 0) {
    const mainWeather = weatherinfo.weather[0].main;
 
    // Map weather conditions to image paths
    switch (mainWeather) {
      case 'Sunny':
        weatherImage = sun;
        break;
      case 'Clouds':
        weatherImage = clouds;
        break;
      case 'Rain':
          weatherImage = rain;
          break;
      case 'Haze':
            weatherImage = haze;
            break;
      default:
        weatherImage = suncloud;
        break;
    }
  }

 
  return (
    <div className={`${isWeb2 ? style.weatherInfoFixed  : style.weatherInfo} ${ isTablet ? style.weatherInfoFixedi  : style.weatherInfo  } `}>
      {weatherImage && (
        <img src={weatherImage} className={style.weatherIcon} alt="Weather" />
      )}
      <p className={style.weatherTemp}>
        {weatherinfo?.main?.temp}<span className={style.weatherDegree}>°C</span>
      </p>
      <h1 className={style.weatherLocationName}>{weatherinfo?.name}</h1>
      <div className={`responsive-component ${isMobile ? style.weatherFixed : style.weatherDesContainer}`}>
        <div className={style.weatherSunriseContainer}>
          <img src={sunrise} alt="Sunrise" />
          <div className={style.weatherSunriseDesContainer}>
            <p className={style.weatherP}>{sunriseTimestamp}</p>
            <p className={style.weatherP}>sunrise</p>
          </div>
        </div>
        <div className={style.weatherSunriseContainer}>
          <img src={wind} className={style.wind} alt="Wind" />
          <div className={style.weatherSunriseDesContainer}>
            <p className={style.weatherP}> {weatherinfo?.wind?.speed}<span className={style.weatherP}>km</span></p>
            <p className={style.weatherP}>wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
