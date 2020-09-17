import React from 'react';

function Image(props) {
  const { url, text, method } = props;
  const imageProps = {
    src: url,
    alt: text,
    height: 400
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
