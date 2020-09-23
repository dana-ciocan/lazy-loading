import React, { useState, useEffect } from 'react';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import PlainImageContainer from './ImageContainers/Plain';
import NativeImageContainer from './ImageContainers/Native';
import IntersectionObserverAPIImageContainer from './ImageContainers/IntersectionObserverAPI';
import EventDrivenImageContainer from './ImageContainers/EventDriven';
import VanillaLazyloadingImageContainer from './ImageContainers/VanillaLazy';

function App() {
  const methodLookup = {
    none: 'No lazy loading',
    native: 'Native lazy loading',
    events: 'JavaScript events',
    api: 'Intersection Observer API',
    vanilla: 'Library: Vanilla Lazyloading',
    hybrid: 'Hybrid: Native/API'
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
  const ImageContainer = 'loading' in HTMLImageElement.prototype ? <NativeImageContainer imagesToDisplay={imagesToDisplay} /> : <IntersectionObserverAPIImageContainer imagesToDisplay={imagesToDisplay} />;
  return (
    <div className="app">
      <SearchForm
        topic={topic}
        setTopic={setTopic}
        setMethod={setMethod}
        setShowImages={setShowImages}
        methodLookup={methodLookup}
      />
      {showImages && <h2>GIPHYs for '{topic}' using '{methodLookup[method]}'</h2>}
      {showImages && method === 'none' && <PlainImageContainer imagesToDisplay={imagesToDisplay} />}
      {showImages && method === 'native' && <NativeImageContainer imagesToDisplay={imagesToDisplay} />}
      {showImages && method === 'events' && <EventDrivenImageContainer imagesToDisplay={imagesToDisplay} />}
      {showImages && method === 'api' && <IntersectionObserverAPIImageContainer imagesToDisplay={imagesToDisplay} />}
      {showImages && method === 'vanilla' && <VanillaLazyloadingImageContainer imagesToDisplay={imagesToDisplay} />}
      {showImages && method === 'hybrid' && ImageContainer }
    </div>
  );
}

export default App;
