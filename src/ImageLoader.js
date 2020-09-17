import React from 'react';
import Image from './Image';

function ImageLoader() {
  const imagesToDisplay = [
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif',
    'https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif'
  ]
  return (
    <div className="Image">
      {
        imagesToDisplay.map(image => {
          return <Image
            url={image}
            text="It is a cat"
          />;
        })
      }
    </div>
  );
}

export default ImageLoader;
