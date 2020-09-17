import React, { useEffect, useState } from 'react';
import Image from './Image';

function ImageLoader({ query, num, offset, method, defaultHeight }) {
  const [imagesToDisplay, setImagesToDisplay] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = `http://api.giphy.com/v1/gifs/search?api_key=zvj5cMK94bGXSPqbLIQo2GiTJXSpUEI5&q=${query}&limit=${num}&rating=g&offset=${offset}`;
      await fetch(url)
        .then(response => response.json())
        .then(response => setImagesToDisplay(response.data.map(imageData => imageData.images.original.url)))
      };
      fetchData();
  }, [query, num]);
  return (
    <div className="Image">
      {
        imagesToDisplay.map((image, index) => {
          return <div><Image
            method={method}
            key={image}
            url={image}
            text={`It is a ${query}`}
            defaultHeight={defaultHeight}
          /></div>;
        })
      }
    </div>
  );
}

export default ImageLoader;
