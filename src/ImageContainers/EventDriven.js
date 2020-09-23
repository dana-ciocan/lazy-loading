import React, { useEffect, useRef, useState } from 'react';
import './ImageContainers.css';
import placeholder from './placeholder.gif';

function EventDrivenImageContainer({ imagesToDisplay }) {
  const eventContainer = useRef(null);
  const [setupDone, setSetupDone] = useState(false);
  useEffect(() => {
    let lazyloadThrottleTimeout;
    const lazyloadImages = Array.from(eventContainer.current.children).filter(child => Array.from(child.classList).includes('lazy-events'));
    if (!setupDone && eventContainer && eventContainer.current && lazyloadImages.length !== 0) {
      const lazyload = () => {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
        
        lazyloadThrottleTimeout = setTimeout(() => {
          const scrollTop = window.pageYOffset;
          lazyloadImages.forEach(img => {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy-events');
            }
          })
          if(lazyloadImages.length === 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
          setSetupDone(true);
        }, 20);
      }
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  });
  return (
    <div className="image-container">
        <div
            ref={eventContainer}
            className="image-container__events">
            {imagesToDisplay && imagesToDisplay.map((image, index) => {
                return <img
                    height={image.height}
                    width={image.width}
                    alt={image.altText}
                    src={index < 3 ? image.url : placeholder}
                    data-src={image.url}
                    className={`${image.className} lazy-events`}
                    key={image.url}
                />;
            })}
        </div>
    </div>
  );
}

export default EventDrivenImageContainer;
