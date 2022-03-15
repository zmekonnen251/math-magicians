import React from 'react';
import './Calculator.css';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calc-container">
        <div className="calc-display">0</div>
        <div className="number ac">AC</div>
        <div className="number plus-minus">+/-</div>
        <div className="number modulo">%</div>
        <div className="operator division">÷</div>
        <div className="number seven">7</div>
        <div className="number eight">8</div>
        <div className="number nine">9</div>
        <div className="operator times">x</div>
        <div className="number four">4</div>
        <div className="number five">5</div>
        <div className="number six">6</div>
        <div className="operator minus">-</div>
        <div className="number one">1</div>
        <div className="number two">2</div>
        <div className="number three">3</div>
        <div className="operator plus">+</div>
        <div className="number zero">0</div>
        <div className="dot">.</div>
        <div className="operator equal">=</div>
      </div>
    );
  }
}
