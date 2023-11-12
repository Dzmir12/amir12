import style from './WeatherExtraInfo.module.css'
import { useMediaQuery } from 'react-responsive';



function WeatherExtraInfo({image,text,number,text2,search,weatherinfo}) {

  const isWeb= useMediaQuery({ query: '(max-width: 1300px)' });
  const isWeb2 = useMediaQuery({ query: '(max-width: 761px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 604px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 427px)' });
 

  if (search.length < 4) {
    return null; // Hide the component when search length is lower than 3
  }
  
  if (weatherinfo && weatherinfo.cod === "404" && search.length >= 4) {
    return null;
  }
  
  // ${isWeb2 ? style.weatherExtraInfoContainerFixed  : style.weatherExtraInfoContainer }

  return (
    <div className={`  ${isWeb ? style.WeatherExtraInfoFixed  : style.weatherExtraInfo }`}>
        <img src={image} alt="" className={style.weatherExtraInfoImage} />
       <div className={`${isWeb2 ? style.weatherExtraInfoContainerFixed  : style.weatherExtraInfoContainer } ${isTablet ? style.weatherExtraInfoContainerFixedi  : style.weatherExtraInfoContainer } ${isMobile ? style.weatherExtraInfoContainerFixedw : style.weatherExtraInfoContainer }`}>
       <p  className={style.weatherExtraInfoFirstP}>{text}</p>
        <p  className={` ${text2==='°C' ? style.weatherExtraInfoSecondPFixed:style.weatherExtraInfoSecondP} ${isWeb2 ? style.weatherExtraInfoSecondPFixed2  : style.weatherExtraInfoSecondP }` }>{number}  <span className={` ${text2==='°C' ? style.weatherExtraInfoText:style.weatherExtraInfoText2}`}>{text2}</span></p>
       </div>
    </div>
  )
}

export default WeatherExtraInfo