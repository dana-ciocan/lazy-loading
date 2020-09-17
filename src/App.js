import React from 'react';
import './App.css';
import ImageLoader from './ImageLoader'

function App() {
  const offset = Math.floor(Math.random() * 100);
  const topics = [
    'adventure time',
    'steven universe',
    'mario',
    'nintendo',
    'animal crossing',
    'waiting',
    'time',
    'cat',
    'dog',
    'coffee',
    'hungry'
  ];
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];
  return (
    <div className="App">
      <h1>Topic: {randomTopic}</h1>
      <ImageLoader
        method="native"
        query={randomTopic}
        num={50}
        offset={offset}
      />
    </div>
  );
}

export default App;
