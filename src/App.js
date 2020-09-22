import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm';

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
      <SearchForm
        topic={topic}
        setTopic={setTopic}
        setMethod={setMethod}
        setShowImages={setShowImages}
        methodLookup={methodLookup}
          />
        </div>
        <div className="form-row">
          <label htmlFor="topic">Method</label>
          <select onChange={e => { setMethod(e.target.value); setShowImages(false); }}>
            <option value="none">No lazy loading</option> 
            <option value="native">Native lazy-loading</option> 
            <option value="events">Event driven</option> 
            <option value="api">Observer API</option> 
          </select>
          <button onClick={() => doSetup()}>OK</button>
        </div>
      </div>
      {<ImageLoader
        method={method}
        query={topic}
        num={50}
        offset={Math.floor(Math.random() * 100)}
        showImages={showImages}
      />}
    </div>
  );
}

export default App;
