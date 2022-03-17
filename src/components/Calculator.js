import { useState } from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleCalculation = (event) => {
    setState(calculate(state, event.target.textContent));
  };

  return (
    <div className="calc-container">
      <p className="calc-display">
        {state.total}
        {state.operation}
        {state.next}
      </p>
      <button onClick={handleCalculation} type="button" className="number ac">
        AC
      </button>
      <button
        onClick={handleCalculation}
        type="button"
        className="number plus-minus"
      >
        +/-
      </button>
      <button
        onClick={handleCalculation}
        type="button"
        className="number modulo"
      >
        %
      </button>
      <button
        onClick={handleCalculation}
        type="button"
        className="operator division"
      >
        ÷
      </button>
      <button
        onClick={handleCalculation}
        type="button"
        className="number seven"
      >
        7
      </button>
      <button
        onClick={handleCalculation}
        type="button"
        className="number eight"
      >
        8
      </button>
      <button onClick={handleCalculation} type="button" className="number nine">
        9
      </button>
      <button
        onClick={handleCalculation}
        type="button"
        className="operator times"
      >
        x
      </button>
      <button onClick={handleCalculation} type="button" className="number four">
        4
      </button>
      <button onClick={handleCalculation} type="button" className="number five">
        5
      </button>
      <button onClick={handleCalculation} type="button" className="number six">
        6
      </button>
      <button
        onClick={handleCalculation}
        type="button"
        className="operator minus"
      >
        -
      </button>
      <button onClick={handleCalculation} type="button" className="number one">
        1
      </button>
      <button onClick={handleCalculation} type="button" className="number two">
        2
      </button>
      <button
        onClick={handleCalculation}
        type="button"
        className="number three"
      >
        3
      </button>
      <button
        onClick={handleCalculation}
        type="button"
        className="operator plus"
      >
        +
      </button>
      <button onClick={handleCalculation} type="button" className="number zero">
        0
      </button>
      <button onClick={handleCalculation} type="button" className="dot">
        .
      </button>
      <button
        onClick={handleCalculation}
        type="button"
        className="operator equal"
      >
        =
      </button>
    </div>
  );
};

export default Calculator;
