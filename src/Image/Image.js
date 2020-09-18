import React from 'react';

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
    case 'javascript':
      imageProps['data-src'] = url;
      imageProps.className = 'lazy';
      break;
    default:
      imageProps.src = url;
      break;
  }
  return (
      <img alt="" {...imageProps} />
  );
}

export default Image;
