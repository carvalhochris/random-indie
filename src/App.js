// import logo from './logo.svg';
import './App.css';
import React from 'react';
import PlayTrack from './PlayTrack';
import UYS from './UYS';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Hello /> */}
        <PlayTrack />
        <UYS />
      </header>
    </div>
  );
}

export default App;