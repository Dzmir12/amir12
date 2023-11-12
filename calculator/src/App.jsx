import React, { useState } from 'react';
import Screen from './components/Screen/Screen';
import Wrapper from './components/Wrapper/Wrapper';
import ButtonBox from './components/ButtonBox/ButtonBox';
import { Button, ThemeProvider, createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import './App.css';

const buttonsValue = [["C", "+/-", "%", "/"], [7, 8, 9, "*"], [4, 5, 6, "-"], [1, 2, 3, '+'], [0, ".", "="]];

function App() {
  const theme = createTheme({
    primary: {
      main: grey[700],
      light: grey[200]
    }
  });

  const [calc, setCalc] = useState({
    num: '0', 
    sign: '',
    res: '0', 
  });

  const numClickHandeler = (e) => {
    e.preventDefault();
    const value = e.target.value;

    if (calc.num.length < 16) {
      const newNum = calc.num === '0' ? value : calc.num + value;

      setCalc({
        ...calc,
        num: newNum,
      });
    }
  }

  const commaClickHandeler = (e) => {
    e.preventDefault();
    const value = e.target.value;

    if (!calc.num.includes('.')) {
      setCalc({
        ...calc,
        num: calc.num + value,
      });
    }
  }

  const signClickHandeler = (e) => {
    e.preventDefault();
    const value = e.target.value;

    setCalc({
      ...calc,
      sign: value,
      res: calc.num,
      num: '0',
    });
  }

  const equalsClickHandeler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) => {
        return sign === '+' ? a + b : sign === '-' ? a - b : sign === '*' ? a * b : a / b;
      };

      const result = math(parseFloat(calc.res), parseFloat(calc.num), calc.sign);

      setCalc({
        ...calc,
        res: result.toString(),
        sign: '',
        num: result.toString() ,
      });
    }
  }

  const percentClickHandeler = () => {
    const num = parseFloat(calc.num);
    const res = parseFloat(calc.res);

    setCalc({
      ...calc,
      num: (num / 100).toString(),
      res: (res / 100).toString(),
      sign: '',
    });
  }

  const invertClickHandeler = () => {
    setCalc({
      ...calc,
      num: (-parseFloat(calc.num)).toString(),
      res: (-parseFloat(calc.res)).toString(),
      sign: '',
    });
  }

  const resetClickHandeler = () => {
    setCalc({
      ...calc,
      num: '0',
      res: '0',
      sign: '',
    });
  }

  return (
    <div className='App'>
      <Wrapper>
        <Screen value={calc.num==0  ? calc.res : calc.num} />
        <ThemeProvider theme={theme}>
          <ButtonBox>
            {buttonsValue.flat().map((item, i) => (
              <Button
                key={i}
                value={item}
                variant="contained"
                className={`btn ${item === '=' ? 'fixed' : ''} ${
                  item === 'C' ||
                  item === '+/-' ||
                  item === '%' ||
                  item === '/' ||
                  item === '*' ||
                  item === '-' ||
                  item === '+'
                    ? 'black'
                    : ''
                }`}
                onClick={
                  item === 'C'
                    ? resetClickHandeler
                    : item === '+/-'
                    ? invertClickHandeler
                    : item === '%'
                    ? percentClickHandeler
                    : item === '='
                    ? equalsClickHandeler
                    : item === '/' || item === '*' || item === '-' || item === '+'
                    ? signClickHandeler
                    : item === '.'
                    ? commaClickHandeler
                    : numClickHandeler
                }
              >
                {item}
              </Button>
            ))}
          </ButtonBox>
        </ThemeProvider>
      </Wrapper>
    </div>
  );
}

export default App;

