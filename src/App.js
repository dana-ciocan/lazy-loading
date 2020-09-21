import React, { useState } from 'react';
import './App.css';
import ImageLoader from './ImageLoader';

function App() {
  const [topic, setTopic] = useState('');
  const [method, setMethod] = useState('none');
  const [showImages, setShowImages] = useState(false);
  const handleSubmit = () => {
    if (method === 'events') {
      setTimeout(function() {
        var lazyloadImages = document.querySelectorAll("img.lazy");    
        console.log('lazyloadImages: ', lazyloadImages);
        var lazyloadThrottleTimeout;
        
        function lazyload () {
          if(lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
          }    
          
          lazyloadThrottleTimeout = setTimeout(function() {
              var scrollTop = window.pageYOffset;
              lazyloadImages.forEach(function(img) {
                console.log('image: ', img);
                if(img.offsetTop < (window.innerHeight + scrollTop)) {
                  console.log('removing lazy class for ', img);
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
      }, 1000);
    }
    setShowImages(true);
  }
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
          <option value="events">Event driven</option> 
        </select>
        <button onClick={handleSubmit}>OK</button>
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
