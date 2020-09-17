import React from 'react';
import Image from './Image';

function ImageLoader() {
  return (
    <div className="Image">
      <Image
        url="https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif"
        text="It is a cat"
      />
    </div>
  );
}

export default ImageLoader;
