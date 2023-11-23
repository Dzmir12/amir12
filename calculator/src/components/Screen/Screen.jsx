

function Screen({value}) {
  return (

  
  <div className={`${value.length>=6 ? "screenFixed":"screen"}`}>
       {value}
  </div>
  )
}



export default Screen