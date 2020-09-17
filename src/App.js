import React from 'react';
import './App.css';
import ImageLoader from './ImageLoader'

function App() {
  const offset = Math.floor(Math.random() * 100);
  return (
    <div className="App">
      <ImageLoader
        num={50}
        offset={offset}
      />
    </div>
  );
}

export default App;
