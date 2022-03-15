import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

export default class App extends React.PureComponent {

  render(){
return (
    <div className="App">
      <Calculator />
    </div>
  );
  }
  
}
