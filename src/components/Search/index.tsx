import React from 'react';
import { useNavigate } from 'react-router';

import filters from '../../assets/img/icons/filters.svg';
import share from '../../assets/img/icons/share.svg';
import clear from '../../assets/img/icons/clear.svg';
import combined_shape from '../../assets/img/combined_shape.svg';

interface ISearchProps {
  icon?: string;
  description?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isMainPage?: boolean;
}

const Search: React.FC<ISearchProps> = ({ value, setValue }): JSX.Element => {
  const isMainPage = window.location.pathname === '/';

  const navigate = useNavigate();

  return (
    <section className="search-wrapper">
      {isMainPage && (
        <p className="language-icon">
          <img src={combined_shape} alt="" />
        </p>
      )}
      <p className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search in Trumpf catalogue"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        />

        {value !== '' ? (
          <button onClick={() => setValue('')} className="button clear-button">
            <img className="icon-img" src={clear} alt="" />
          </button>
        ) : (
          <button className="button search-button">
            <img className="icon-img" src={filters} alt="" />
          </button>
        )}

        {value !== '' && (
          <button
            onClick={() => isMainPage && navigate('/results')}
            className="button share-button">
            <img className="icon-img" src={share} alt="" />
          </button>
        )}
      </p>
      {isMainPage && <p className="search-descr">Search by any name, category, SKU or keyword.</p>}
    </section>
  );
};

export default Search;
