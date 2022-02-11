import React, { useEffect, useState } from 'react';
import { productImages, productThumbnails } from './static';

const ProductImages = () => {
  const [mainImage, setMainImage] = useState('');
  const [thumbNails, setThumbNails] = useState([]);

  useEffect(() => {
    setMainImage(productImages[0]);
    setThumbNails(productThumbnails);
  }, []);

  const handleScroll = (e) => {
    const { value } = e.currentTarget;
    const index = productImages.indexOf(mainImage);
    if (value === 'prev') {
      if (index === 0) {
        setMainImage(productImages[productImages.length - 1]);
      } else {
        setMainImage(productImages[index - 1]);
      }
    } else {
      if (index === productImages.length - 1) {
        setMainImage(productImages[0]);
      } else {
        setMainImage(productImages[index + 1]);
      }
    }
  };

  return (
    <div style={{ border: 'solid red' }}>
      <img src={mainImage} alt='' />
      <button value='prev' onClick={handleScroll}>
        <img src='./assets/images/icon-previous.svg' alt='' />
      </button>
      <button value='next' onClick={handleScroll}>
        <img src='./assets/images/icon-next.svg' alt='' />
      </button>
      {thumbNails.map((thumbNail, index) => (
        <button
          key={thumbNail}
          onClick={() => setMainImage(productImages[index])}
        >
          <img src={thumbNail} alt='' />
        </button>
      ))}
    </div>
  );
};

export default ProductImages;
