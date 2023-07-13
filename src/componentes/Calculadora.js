import React, { useState } from 'react';

const Calculadora = () => {
  const [valores, setValor] = useState('');
  // const [result, setResult] = useState(null);

  const ButtonClick = (valor) => {
    setValor(valores + valor);
  };

  const clearClick = () => {
    setValor('');
    setValor(0);
  };

  const equalsClick = () => {
      setValor(eval(valores));
  };

  return (
    <div classNameName="Calculadora">
      <h3>Calculadora</h3>
      <div classNameName="display">
        <input type="text" value={valores} readOnly />
        {/* <div classNameName="result">{result}</div> */}
      </div>
      <div classNameName="buttons">
        <button className='Ce' onClick={() => clearClick()}>C</button>
        <button className="masomenos" onClick={() => ButtonClick('+/-')}>+/-</button>
        <button className="porcentaje" onClick={() => ButtonClick('%')}>%</button>
        <button className="division" onClick={() => ButtonClick('/')}>÷</button>
        <br />
        <button className="siete" onClick={() => ButtonClick('7')}>7</button>
        <button className="ocho" onClick={() => ButtonClick('8')}>8</button>
        <button className="nueve" onClick={() => ButtonClick('9')}>9</button>
        <button className="equis" onClick={() => ButtonClick('*')}>x</button>
        <br />
        <button className="cuatro" onClick={() => ButtonClick('4')}>4</button>
        <button className="cinco" onClick={() => ButtonClick('5')}>5</button>
        <button className="seis" onClick={() => ButtonClick('6')}>6</button>
        <button className="menos" onClick={() => ButtonClick('-')}>-</button>
        <br />
        <button className="uno" onClick={() => ButtonClick('1')}>1</button>
        <button className="dos" onClick={() => ButtonClick('2')}>2</button>
        <button className="tres" onClick={() => ButtonClick('3')}>3</button>
        <button className="mas" onClick={() => ButtonClick('+')}>+</button>
        <br />
        <button className="cero" onClick={() => ButtonClick('0')}>0</button>
        <button className="coma" onClick={() => ButtonClick('.')}>,</button>
        <button className="igual" onClick={equalsClick}>=</button>
        <br />
        <button className="cuadrado" onClick={() => ButtonClick('x&#178')}>x²</button>
        <button className="cubo" onClick={() => ButtonClick('x&#179')}>x³</button>
        <button className="PI" onClick={() => ButtonClick('pi()')}>π</button>
        <button className="raiz" onClick={() => ButtonClick()}>/</button>
        <br />
        <button className="mc" onClick={() => ButtonClick('0')}>mc</button>
        <button className="mplus" onClick={() => ButtonClick('0')}>0</button>
        <button className="m-" onClick={() => ButtonClick('0')}>m-</button>
        <button className="m" onClick={() => ButtonClick('0')}>m</button>
      </div>
    </div>
  );
};

export default Calculadora;