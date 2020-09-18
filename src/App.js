import React, { useState } from 'react';
import './App.css';
import ImageLoader from './ImageLoader';

function App() {
  const [topic, setTopic] = useState('');
  const [showImages, setShowImages] = useState(false);
  return (
    <div className="App">
      <div className="topic-form">
        <label htmlFor="topic">Topic</label>
        <input
          type="text"
          id="topic"
          value={topic}
          onChange={e => { setTopic(e.target.value); setShowImages(false); }}
        />
        <button onClick={() => setShowImages(true)}>OK</button>
      </div>
      {
        showImages ? 
          <ImageLoader
          method="native"
          query={topic}
          num={50}
          offset={10}
          defaultHeight={400}
          /> 
        : null
      }
    </div>
  );
}

export default App;
