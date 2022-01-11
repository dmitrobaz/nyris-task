import React from 'react';

import comments from '../../assets/img/small_img/result-page/comments.svg';
import increase_img from '../../assets/img/small_img/result-page/increase_img.svg';
import share from '../../assets/img/small_img/result-page/share.svg';
import thumb from '../../assets/img/small_img/result-page/thumb.svg';

interface IResultCardProps {
  image: string;
  title: string;
  id: string;
}
const ResultCard: React.FC<IResultCardProps> = ({ image, title, id }): JSX.Element => {
  return (
    <li className="results-card">
      <p className="results-card-img">
        <img src={image} alt="" />
        <input
          type="image"
          alt="increase image"
          className="button-increase-img"
          src={increase_img}
        />
      </p>
      <p className="results-card-id">{id}</p>
      <p className="results-card-title">{title}</p>
      <div className="results-card-button-wrapper">
        <p className="results-card-score-btn">
          <input type="image" alt="thumb-up" className="button-score-up" src={thumb} />
          <input type="image" alt="thumb-down" className="button-score-down" src={thumb} />
        </p>
        <p className="results-card-communication-btn">
          <input type="image" alt="share" className="button-share" src={share} />
          <input type="image" alt="comments" className="button-comment" src={comments} />
        </p>
      </div>
    </li>
  );
};

export default ResultCard;
