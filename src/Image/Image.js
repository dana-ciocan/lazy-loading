import React, { useRef } from 'react';

function Image({ image: { url, height, width }, text, method, defaultHeight }) {
  const curImage = useRef(null);
  const calcProps = () => {
    curImage.current.alt = text;
    curImage.current.height = height || defaultHeight || 400;
    curImage.current.width = width;

    const scrollTop = window.pageYOffset;
    const imageInViewport = curImage.current.offsetTop < (window.innerHeight + scrollTop)
    const curMethod = imageInViewport ? 'none' : method;

    switch (curMethod) {
      case 'native':
        curImage.current.loading = 'lazy';
        curImage.current.src = url;
        break;
      case 'events':
        curImage.current['data-src'] = url;
        curImage.current.className = 'lazy';
        break;
      default:
        curImage.current.src = url;
        break;
    }
  }

  return (
    <img
      src="placeholder.gif"
      ref={curImage}
      alt=""
      onError={calcProps}
    />
  );
}

export default Image;
