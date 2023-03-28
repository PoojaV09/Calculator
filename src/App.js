import logo from './logo.svg';
import './App.css';
import React from 'react';
import CalculatorApp from './components/CalculatorApp';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
     <React.Fragment>
      <Provider store={store}>
        
      <CalculatorApp/>

      </Provider>
     </React.Fragment>
    </div>
  );
}

export default App;
