import { useState } from 'react'
import './App.css'



function App() {

  const exchangeRates = {
    USD: {
      IRR: 42105.26,
      EUR: 0.85,
      AUD: 1.34,
      JPY: 110.0,
    },
    EUR: {
      IRR: 49500,
      USD: 1.18,
      AUD: 1.58,
      JPY: 131.58,
    },
    AUD: {
      IRR: 31500,
      USD: 0.75,
      EUR: 0.63,
      JPY: 83.33,
    },
    JPY: {
      IRR: 383.33,
      USD: 0.0091,
      EUR: 0.0076,
      AUD: 0.012,
    },
    IRR: {
      USD: 0.2374,  // Example exchange rate, 1 IRR to USD
      EUR: 0.2020,  // Example exchange rate, 1 IRR to EUR
      AUD: 0.3175,  // Example exchange rate, 1 IRR to AUD
      JPY: 0.2614,    // Example exchange rate, 1 IRR to JPY
    },
  };

  const [fromAmount, setFromAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toAmount, setToAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState('IRR');
  const [time, setTime] = useState('');


  const handleBlurFromAmount = () => {
    if (fromAmount && fromCurrency && toCurrency) {
      const convertedAmount = (
        parseFloat(fromAmount) * exchangeRates[fromCurrency][toCurrency]
      ).toFixed(2);
      setToAmount(convertedAmount);
      setTime(`Conversion performed at: ${new Date().toLocaleTimeString()}`);
    }
  };

  const handleBlurToAmount = () => {
    if (toAmount && fromCurrency && toCurrency) {
      const convertedAmount = (
        parseFloat(toAmount) * exchangeRates[toCurrency][fromCurrency]
      ).toFixed(2);
      setFromAmount(convertedAmount);
      setTime(`Conversion performed at: ${new Date().toLocaleTimeString()}`);
    }
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'fromAmount') {
      setFromAmount(value);
    } else if (name === 'fromCurrency') {
      setFromCurrency(value);
    } else if (name === 'toAmount') {
      setToAmount(value);
    } else if (name === 'toCurrency') {
      setToCurrency(value);
    }
  };


  return (

    <div className='main-container'>

      <div className='container'>
      
        <h1>Currency Converter</h1> 

        <div id="time">{time}</div>

        <div className='input-container'>

          <div className='input-select-container'>
                <input
                 type="text"
                 name="fromAmount"
                 value={fromAmount}
                 onBlur={handleBlurFromAmount}
                 onChange={handleInputChange}
                 placeholder="0"
                />
                 <select
                   name="fromCurrency"
                   value={fromCurrency}
                   onChange={handleInputChange}
                   >
                   <option value="USD">US Dollar (USD)</option>
                   <option value="EUR">Euro (EUR)</option>
                   <option value="AUD">Australian Dollar (AUD)</option>
                   <option value="JPY">Japanese Yen (JPY)</option>
                   <option value="IRR">Iranian Rial (IRR)</option>
                  </select>
          </div>



          <span>to</span>



            <div className='input-select-container'>
               <input
                 type="text"
                 name="toAmount"
                 value={toAmount}
                 onBlur={handleBlurToAmount}
                 onChange={handleInputChange}
                 placeholder="0"
                />
                <select
                 name="toCurrency"
                 value={toCurrency}
                 onChange={handleInputChange}
                >
                <option value="USD">US Dollar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="AUD">Australian Dollar (AUD)</option>
                <option value="JPY">Japanese Yen (JPY)</option>
                <option value="IRR">Iranian Rial (IRR)</option>
               </select>
            </div>

        </div>
        








      </div>











    </div>

  )
}

export default App
