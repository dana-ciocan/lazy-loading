import React, { useEffect } from 'react';
import './ImageContainers.css';
import LazyLoad from "vanilla-lazyload";

function VanillaLazyloadingImageContainer({ imagesToDisplay }) {
  useEffect(() => {
    if (!document.lazyLoadInstance) {
      document.lazyLoadInstance = new LazyLoad({ elements_selector: '.lazy' });
    }
    document.lazyLoadInstance.update();
  });
  return (
    <div className="image-container">
        {imagesToDisplay && imagesToDisplay.map((image) => {
            return <img 
                alt={image.altText}
                className={`${image.className} lazy`}
                data-src={image.url}
                width={image.width}
                height={image.height}
                key={image.url}
            />;
        })}
    </div>
);
}

export default VanillaLazyloadingImageContainer;
