import React from 'react';

import search_image from '../../assets/img/search_image.png'
import abstract from '../../assets/img/small_img/abstract.png'

const AddPhoto: React.FC = (): JSX.Element => {
    return (
        <section className="photo-drag">
            <p className="photo-drag-icon">
                <img src={search_image} alt="Chose photo icon" />
            </p>
            <p className='photo-drag-select-wrapper'>
                <button className="photo-drag-select-button">Choose photo</button>
                <span className="photo-drag-select-text">or drag & drop it here</span>
            </p>
            <p className="photo-drag-options-descr">You can try with these options too:</p>
            <p className="photo-drag-options-wrapper">
                <img className='photo-drag-options-item' src={abstract} alt="" />
                <img className='photo-drag-options-item' src={abstract} alt="" />
                <img className='photo-drag-options-item' src={abstract} alt="" />
                <img className='photo-drag-options-item' src={abstract} alt="" />
                <img className='photo-drag-options-item' src={abstract} alt="" />
                <img className='photo-drag-options-item' src={abstract} alt="" />
            </p>
        </section>
    );
};

export default AddPhoto;