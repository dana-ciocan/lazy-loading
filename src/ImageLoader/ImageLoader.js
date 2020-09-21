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
