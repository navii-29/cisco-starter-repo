import React from 'react';
import './App.css';

const Exhibit = ({ heading, children }) => {
  return (
    <div className="exhibit-container">
      <h2 className="exhibit-heading">{heading}</h2>
      <div className="exhibit-content">
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p h3>
          SEXTANT:Website for field technician
        </p>
        <Exhibit heading="Exhibit">
          {}
        </Exhibit>
      </header>
    </div>
  );
}

export default App;
