import React, { useState } from 'react';
import './App.css';
import ImageLoader from './ImageLoader';

function App() {
  const [topic, setTopic] = useState('');
  const [method, setMethod] = useState('none');
  const [showImages, setShowImages] = useState(false);
  return (
    <div className="App">
      <div className="topic-form">
        <div className="form-row">
          <label htmlFor="topic">Topic</label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={e => { setTopic(e.target.value); setShowImages(false); }}
          />
        </div>
        <div className="form-row">
        <label htmlFor="topic">Method</label>
        <select onChange={e => { setMethod(e.target.value); setShowImages(false); }}>
          <option value="none">No lazy loading</option> 
          <option value="native">Native lazy-loading</option> 
        </select>
        <button onClick={() => setShowImages(true)}>OK</button>
        </div>
      </div>
      {
        showImages ? 
          <ImageLoader
          method={method}
          query={topic}
          num={50}
          offset={Math.floor(Math.random() * 100)}
          defaultHeight={400}
          /> 
        : null
      }
    </div>
  );
}

export default App;
