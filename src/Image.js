import React from 'react';

function Image({ url, text, method, defaultHeight }) {
  const imageProps = {
    src: url,
    alt: text,
    height: defaultHeight || 400
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
