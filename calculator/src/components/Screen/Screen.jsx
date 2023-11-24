import { useMediaQuery } from "react-responsive";


function Screen({value}) {
  const isTablet = useMediaQuery({ query: '(max-width: 569px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 479px)' });
  return (

  
  <div className={`${value.length>=6 ? "screenFixed":"screen"} ${isTablet && value.length>=5? "screenFixed1":"screen"} ${isMobile &&value.length>=4? "screenFixed2":"screen"}`}>
       {value}
  </div>
  )
}



export default Screen