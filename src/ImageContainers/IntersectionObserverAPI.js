import React, { useEffect, useRef } from 'react';
import './ImageContainers.css';

function IntersectionObserverAPIImageContainer({ imagesToDisplay }) {
  const apiContainer = useRef(null);
  useEffect(() => {
    let lazyloadImages;    
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = Array.from(apiContainer.current.children).filter(child => Array.from(child.classList).includes('lazy-api'));
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy-api");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(image => {
        imageObserver.observe(image);
      });
    }
  });
  return (
      <div
        ref={apiContainer}
        className="image-container">
        {imagesToDisplay && imagesToDisplay.map((image, index) => {
            return <img
                style={{ height: `${image.height}px`}}
                height={image.height}
                width={image.width}
                alt={image.altText}
                data-src={image.url}
                className={`${image.className} lazy-api`}
                key={image.url}
            />;
        })}
    </div>
);
}

export default IntersectionObserverAPIImageContainer;
