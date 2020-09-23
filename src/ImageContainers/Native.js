import React from 'react';
import './ImageContainers.css';

function NativeImageContainer({ imagesToDisplay }) {
  return (
    <div className="image-container">
        <div className="image-container__native">
            {imagesToDisplay && imagesToDisplay.map(image => {
                return <img
                    height={image.height}
                    width={image.width}
                    src={image.url}
                    alt={image.altText}
                    className={image.className}
                    loading="lazy"
                    key={image.url}
                />;
            })}
        </div>
    </div>
);
}

export default NativeImageContainer;
