import React from 'react';
import './Image.css';

function Image({ image: { url, height, width }, text, method, defaultHeight }) {
  const imageProps = {
    alt: text,
    height: height || defaultHeight || 400,
    width
  };
  if (method === 'native') {
    imageProps.loading = 'lazy';
    imageProps.src = url;
  }
  return (
    <div className="Image">
      <img alt="" {...imageProps} />
    </div>
  );
}

export default Image;
