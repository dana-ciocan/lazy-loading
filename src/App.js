import React, { useState } from 'react';
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
  const doSetup = () => {
    const lazyloadImages = document.querySelectorAll("img.lazy");
    if(method === 'events') {
      let lazyloadThrottleTimeout;
      
      const lazyload = () => {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
        
        lazyloadThrottleTimeout = setTimeout(function() {
            const scrollTop = window.pageYOffset;
            lazyloadImages.forEach((img) => {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                  img.src = img.dataset.src;
                  img.classList.remove('lazy');
                }
            });
            if(lazyloadImages.length === 0) { 
              document.removeEventListener("scroll", lazyload);
              window.removeEventListener("resize", lazyload);
              window.removeEventListener("orientationChange", lazyload);
            }
        }, 20);
      }
      
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    } else if (method === 'api') {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });

      lazyloadImages.forEach((image) => {
        imageObserver.observe(image);
      });
    }
    setShowImages(true);
  }
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
