import React from 'react';

function Image(props) {
  const { url, text } = props;
  return (
    <div className="Image">
      <img
        src={url}
        alt={text}
        loading="lazy"
      />
    </div>
  );
}

export default Image;
