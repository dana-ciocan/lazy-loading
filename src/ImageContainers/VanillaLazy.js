import React from 'react';
import './ImageContainers.css';
import LazyImage from "./LazyImage";

function VanillaLazyloadingImageContainer({ imagesToDisplay }) {
  return (
    <div className="image-container">
        <div
            className="image-container__native"
            style={{ width: '50%' }}>
            {imagesToDisplay && imagesToDisplay.map((image) => {
                return <LazyImage
                    alt={image.altText}
                    data-src={image.url}
                    // data-srcset={}
                    // data-sizes={}
                    key={image.url}
                    height={image.height}
                    width={image.width}
                />;
            })}
        </div>
    </div>
);
}

export default VanillaLazyloadingImageContainer;
