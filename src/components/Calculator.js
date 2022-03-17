import React from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleCalculation = (event) => {
    this.setState((state) => calculate(state, event.target.textContent));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calc-container">
        <p className="calc-display">
          {total}
          {operation}
          {next}
        </p>
        <button
          onClick={this.handleCalculation}
          type="button"
          className="number ac"
        >
          AC
        </button>
        <button
          onClick={this.handleCalculation}
          type="button"
          className="number plus-minus"
        >
          +/-
        </button>
        <button
          onClick={this.handleCalculation}
          type="button"
          className="number modulo"
        >
          %
        </button>
        <button
          onClick={this.handleCalculation}
          type="button"
          className="operator division"
        >
          ÷
        </button>
        <button
          onClick={this.handleCalculation}
          type="button"
          className="number seven"
        >
          7
        </button>
        <button
          onClick={this.handleCalculation}
          type="button"
          className="number eight"
        >
          8
        </button>
        <button
          onClick={this.handleCalculation}
          type="button"
          className="number nine"
        >
          9
        </button>
        <button
          onClick={this.handleCalculation}
          type="button"
          className="operator times"
        >
          x
        </button>
        <button
          onClick={this.handleCalculation}
          type="button"
          className="number four"
        >
          4
        </button>
        <button
          onClick={this.handleCalculation}
          type="button"
          className="number five"
        >
          5
        </button>
        <button
          onClick={this.handleCalculation}
          type="button"
          className="number six"
        >
          6
        </button>
        <button
          onClick={this.handleCalculation}
          type="button"
          className="operator minus"
        >
          -
        </button>
        <button
          onClick={this.handleCalculation}
          type="button"
          className="number one"
        >
          1
        </button>
        <button
          onClick={this.handleCalculation}
          type="button"
          className="number two"
        >
          2
        </button>
        <button
          onClick={this.handleCalculation}
          type="button"
          className="number three"
        >
          3
        </button>
        <button
          onClick={this.handleCalculation}
          type="button"
          className="operator plus"
        >
          +
        </button>
        <button
          onClick={this.handleCalculation}
          type="button"
          className="number zero"
        >
          0
        </button>
        <button onClick={this.handleCalculation} type="button" className="dot">
          .
        </button>
        <button
          onClick={this.handleCalculation}
          type="button"
          className="operator equal"
        >
          =
        </button>
      </div>
    );
  }
}
