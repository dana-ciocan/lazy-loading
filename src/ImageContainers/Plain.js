import React from 'react';
import './ImageContainers.css';

function PlainImageContainer({ imagesToDisplay }) {
    return (
        <div className="image-container">
            {imagesToDisplay && imagesToDisplay.map(image => {
                return <img
                    height={image.height}
                    width={image.width}
                    src={image.url}
                    alt={image.altText}
                    className={image.className}
                    key={image.url}
                />;
            })}
        </div>
    );
}

export default PlainImageContainer;
