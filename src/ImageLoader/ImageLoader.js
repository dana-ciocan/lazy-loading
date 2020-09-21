import React, { useEffect, useState } from 'react';
import Image from '../Image/Image';
import './ImageLoader.css';

function ImageLoader({ query, num, offset, method, defaultHeight }) {
  const [imagesToDisplay, setImagesToDisplay] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const url = `http://api.giphy.com/v1/gifs/search?api_key=zvj5cMK94bGXSPqbLIQo2GiTJXSpUEI5&q=${query}&limit=${num}&rating=g&offset=${offset}`;
      await fetch(url)
        .then(response => response.json())
        .then(response => {
          const imageData = response.data.map(imageData => {
            const { url, height, width } = imageData.images.original;
            return { url, height, width };
          });
          setImagesToDisplay(imageData);
        });
      }
      fetchData();
  }, [query, num, offset]);
  useEffect(() => {
    if (imagesLoaded === num && method === 'events') {
      const lazyloadImages = document.querySelectorAll("img.lazy");    
      let lazyloadThrottleTimeout;
      
      const lazyload = () => {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
        
        lazyloadThrottleTimeout = setTimeout(function() {
            const scrollTop = window.pageYOffset;
            lazyloadImages.forEach((img) => {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                  img.src = img.dataset.src;
                  img.classList.remove('lazy');
                }
            });
            if(lazyloadImages.length === 0) { 
              document.removeEventListener("scroll", lazyload);
              window.removeEventListener("resize", lazyload);
              window.removeEventListener("orientationChange", lazyload);
            }
        }, 20);
      }
      
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  }, [imagesLoaded, method])
  const incrementImagesLoaded = () => {
    setImagesLoaded(imagesLoaded + 1);
  }
  return (
    <div className="image-loader">
      {
        imagesToDisplay.map((image, index) => {
          return <div
            className="image-loader__container"
            key={index}
            style={{
              width: '50%'
            }}>
            <Image
              method={method}
              image={image}
              text={`It is a ${query}`}
              incrementImagesLoaded={incrementImagesLoaded}
            />
          </div>;
        })
      }
    </div>
  );
}

export default ImageLoader;
