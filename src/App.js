// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import PlayTrack from './PlayTrack';
import UYS from './UYS';
// import RandomSongPlayer from './RandomSongPlayer';
import RandomSongButton from './RandomSongPlayer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RandomSongButton />
        <br></br>
        <UYS />
      </header>
    </div>
  );
}

export default App;