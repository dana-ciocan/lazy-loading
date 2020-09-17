import React from 'react';
import './App.css';
import ImageLoader from './ImageLoader'

function App() {
  return (
    <div className="App">
      <ImageLoader
        query="finn"
        num={30}
      />
    </div>
  );
}

export default App;
