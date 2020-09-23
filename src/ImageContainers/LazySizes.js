import React from 'react';
import './ImageContainers.css';
import 'lazysizes';

function LazySizesContainer({ imagesToDisplay }) {
  return (
    <div className="image-container">
        {imagesToDisplay && imagesToDisplay.map((image) => {
            return <img 
                alt={image.altText}
                className={`${image.className} lazyload`}
                data-src={image.url}
                width={image.width}
                height={image.height}
                key={image.url}
            />;
        })}
    </div>
);
}

export default LazySizesContainer;
