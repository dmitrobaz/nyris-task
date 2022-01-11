import React from 'react';

import search_image from '../../assets/img/search_image.svg';
import abstract from '../../assets/img/small_img/abstract.svg';
import option1 from '../../assets/img/small_img/option1.svg';
import option2 from '../../assets/img/small_img/option2.svg';
import women from '../../assets/img/small_img/women.svg';
import water from '../../assets/img/small_img/water.svg';
import bed from '../../assets/img/small_img/bed.svg';

const AddPhoto: React.FC = (): JSX.Element => {
  const imgArr = [option1, option2, women, water, abstract, bed];
  return (
    <section className="photo-drag">
      <p className="photo-drag-icon">
        <img src={search_image} alt="Chose photo icon" />
      </p>
      <p className="photo-drag-select-wrapper">
        <button className="photo-drag-select-button">Choose photo</button>
        <span className="photo-drag-select-text">or drag & drop it here</span>
      </p>
      <p className="photo-drag-options-descr">You can try with these options too:</p>
      <p className="photo-drag-options-wrapper">
        {imgArr.map((img: string, index: number) => {
          return <img key={index} className="photo-drag-options-item" src={img} alt="" />;
        })}
      </p>
    </section>
  );
};

export default AddPhoto;
