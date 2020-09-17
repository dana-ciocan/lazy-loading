import React from 'react';
import './Image.css';

function Image({ image: { url, height, width }, text, method, defaultHeight }) {
  const imageProps = {
    src: url,
    alt: text,
    height: height || defaultHeight || 400,
    width
  };
  if (method === 'native') {
    imageProps.loading = 'lazy';
  }
  return (
    <div className="Image">
      <img {...imageProps} />
    </div>
  );
}

export default Image;
