import style from "./AirPollution.module.css";
import weatherI from "./../../assets/icons8-windy-weather.gif"
import { useMediaQuery } from "react-responsive";


function AirPollution({ search,airPollution,weatherinfo }) {

    const isWeb = useMediaQuery({ query: '(max-width: 1300px)' });
    const isWeb2 = useMediaQuery({ query: '(max-width: 916px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 427px)' });

  if (search.length < 4) {
    return null; 
  }

  
  if (weatherinfo && weatherinfo.cod === "404" && search.length >= 4) {
    return null;
  }

  if (search.length < 4 || !airPollution || !airPollution.list || !airPollution.list[0]) {
    return null; 
  }

  const aqi = airPollution.list[0].main.aqi;

  let airQualityText = "";
  if (aqi === 1) {
    airQualityText = "Good";
  } else if (aqi === 2) {
    airQualityText = "Fair";
  } else if (aqi === 3) {
    airQualityText = "Moderate";
  } else if (aqi === 4) {
    airQualityText = "Poor";
  }



  return (
    <div className={` ${isWeb2 ? style.airPollutionFixed  : style.airPollution }`}>
      <div className={` ${isWeb ? style.airPollutionTitleContainerFixed : style.airPollutionTitleContainer} `}>
        <div className={` ${isWeb ? style.airPollutionIconFixed : style.airPollutionIcon}`}>
        <h2>Air Quality Index </h2>
        <img src={weatherI} alt="" />
        </div>
        
        <div className={`${style.airPollutionIndex} ${aqi === 1? style.airPollution1:aqi === 2? style.airPollution2 : aqi === 3 ? style.airPollution3:aqi === 4 ? style.airPollution4:"" }`}> {airQualityText} </div>
      </div>

      <div className={` ${isWeb ? style.airPollutionTitle2ContainerFixed : style.airPollutionTitle2Container} `}>
           <div className={` ${isWeb ? style.airPollutionDContainerFixed : style.airPollutionDContainer} ${isMobile ? style.airPollutionDContainerFixedw : style.airPollutionDContainer} `}>
           <div><p  className={style.airPollutionFirstP}>so<span className={style.airPollutionSecondP}>2</span></p> <p className={` ${isWeb ? style.airPollutionNumberFixed : style.airPollutionNumber}`}>{airPollution?.list[0]?.components?.so2}</p></div>
           <div><p  className={style.airPollutionFirstP}>no<span className={style.airPollutionSecondP}>2</span></p> <p className={` ${isWeb ? style.airPollutionNumberFixed : style.airPollutionNumber}`}>{airPollution?.list[0]?.components?.no2}</p></div>
           </div>

           <div  className={` ${isWeb ? style.airPollutionDContainerFixed : style.airPollutionDContainer} ${isMobile ? style.airPollutionDContainerFixedw : style.airPollutionDContainer}`}>
           <div><p  className={style.airPollutionFirstP}>pm<span className={style.airPollutionSecondP}>10</span></p> <p className={` ${isWeb ? style.airPollutionNumberFixed : style.airPollutionNumber}`}>{airPollution?.list[0]?.components?.pm10}</p></div>
           <div><p  className={style.airPollutionFirstP}>o<span  className={style.airPollutionSecondP}>3</span></p> <p className={` ${isWeb ? style.airPollutionNumberFixed : style.airPollutionNumber}`}>{airPollution?.list[0]?.components?.o3}</p></div>
           </div>
      </div>

    </div>
  );
}

export default AirPollution;
