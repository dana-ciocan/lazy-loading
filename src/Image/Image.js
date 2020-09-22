import React, { useEffect, useRef } from 'react';
import './Image.css';

const Image = ({ image: { url, height, width }, text, method }) => {
  const curImage = useRef(null);
  useEffect(() => {
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
  }, [method, text, url]);

  return (
    <img
      width={width}
      height={height}
      src="placeholder.gif"
      ref={curImage}
      alt=""
    />
  );
};

export default Image;
