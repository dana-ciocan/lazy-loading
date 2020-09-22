import React, { useState, useEffect } from 'react';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import PlainImageContainer from './ImageContainers/Plain';
import NativeImageContainer from './ImageContainers/Native';

function App() {
  const methodLookup = {
    none: 'No lazy loading',
    native: 'Native lazy loading',
    events: 'JavaScript events',
    api: 'Intersection Observer API'
  }
  const [topic, setTopic] = useState('');
  const [method, setMethod] = useState('none');
  const [showImages, setShowImages] = useState(false);
  const [imagesToDisplay, setImagesToDisplay] = useState([]);
  useEffect(() => {
    const offset = Math.floor(Math.random() * 100);
    const fetchData = async () => {
      const url = `http://api.giphy.com/v1/gifs/search?api_key=zvj5cMK94bGXSPqbLIQo2GiTJXSpUEI5&q=${topic}&limit=50&rating=g&offset=${offset}`;
      await fetch(url)
        .then(response => response.json())
        .then(response => {
          const imageData = response.data.map(imageData => {
            const { url, height, width } = imageData.images.original;
            return {
              url,
              height,
              width,
              altText: `This is a GIPHY for ${topic}`,
              className: 'image__visible'
            };
          });
          setImagesToDisplay(imageData);
        });
    }
    if (showImages) {
      fetchData();
    }
  }, [topic, showImages]);
  return (
    <div className="app">
      <SearchForm
        topic={topic}
        setTopic={setTopic}
        setMethod={setMethod}
        setShowImages={setShowImages}
        methodLookup={methodLookup}
      />
      {showImages && <h2>GIPHYs for {topic} using '{methodLookup[method]}'</h2>}
      {showImages && method === 'none' && <PlainImageContainer imagesToDisplay={imagesToDisplay} />}
      {showImages && method === 'native' && <NativeImageContainer imagesToDisplay={imagesToDisplay} />}
    </div>
  );
}

export default App;
