import React from 'react';
import './App.css';
import DeepNestedComponent from './DeepNestedComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Nested Component
        <DeepNestedComponent/>
        </header>
    </div>
  );
}

export default App;
