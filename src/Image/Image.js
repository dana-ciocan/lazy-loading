import React from 'react';
import './Image.css';

function Image({ image: { url, height, width }, text, method, defaultHeight }) {
  const imageProps = {
    alt: text,
    height: height || defaultHeight || 400,
    width
  };
  switch (method) {
    case 'native':
    imageProps.loading = 'lazy';
    imageProps.src = url;
      break;
    default:
      imageProps.src = url;
      break;
  }
  return (
    <div className="Image">
      <img alt="" {...imageProps} />
    </div>
  );
}

export default Image;
