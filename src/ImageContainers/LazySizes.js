import React from 'react';
import './ImageContainers.css';
import 'lazysizes';
import placeholder from './placeholder.gif';

function LazySizesContainer({ imagesToDisplay }) {
  return (
    <div className="image-container">
        {imagesToDisplay && imagesToDisplay.map((image, index) => {
            return <img 
                alt={image.altText}
                className={`${image.className} lazyload`}
                src={index < 3 ? image.url : placeholder}
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
