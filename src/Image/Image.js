import React, { useRef } from 'react';
import './Image.css';

function Image({ image: { url, height, width }, text, method, incrementImagesLoaded }) {
  const curImage = useRef(null);
  const calcProps = () => {
    curImage.current.alt = text;

    const scrollTop = window.pageYOffset;
    const imageInViewport = curImage.current.offsetTop < (window.innerHeight + scrollTop)
    const curMethod = imageInViewport ? 'none' : method;

    switch (curMethod) {
      case 'native':
        curImage.current.loading = 'lazy';
        curImage.current.src = url;
        break;
      case 'events':
      case 'api':
        curImage.current.dataset.src = url;
        curImage.current.className = 'lazy';
        break;
      default:
        curImage.current.src = url;
        break;
    }
    incrementImagesLoaded();
  }

  return (
    <img
      width={width}
      height={height}
      src="placeholder.gif"
      ref={curImage}
      alt=""
      onError={calcProps}
    />
  );
}

export default Image;
