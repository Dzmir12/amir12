import './Calculator.scss';
import { Button, ThemeProvider, createTheme } from '@mui/material';
import { grey} from '@mui/material/colors';
import { useState } from 'react';
const buttonsValue=[["C","+/-","%","/"],[7,8,9,"*"],[4,5,6,"-"],[1,2,3,'+'],[0,".","="]];



function Calculator() {

  const [displayValue, setDisplayValue] = useState(0);
 
  const handleButtonClick = (value) => {
    setDisplayValue(value);
  };
  
const theme=createTheme({
  primary:{
    main:grey[700],
    light:grey[200]
  }
})

 return (
    <div className="calc" >
       <div className='display'>
       <p>{displayValue}</p>
       </div>
       <ThemeProvider theme={theme}>
       <div className='buttons'>
        {buttonsValue.flat().map((item,i)=>{
           return  <Button key={i}  variant="contained" className={`btn ${item==='=' ?'fixed':''} `} onClick={()=>handleButtonClick(item)} >{item}</Button>
        })}
       </div>
       </ThemeProvider>
    </div>
  )
}

export default Calculator