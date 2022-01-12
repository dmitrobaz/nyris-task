import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';

import { setSearchValue } from '../../store/search/actions';

import { ISearchStore } from '../../types/interface';

import filters from '../../assets/img/icons/filters.svg';
import share from '../../assets/img/icons/share.svg';
import clear from '../../assets/img/icons/clear.svg';
import combined_shape from '../../assets/img/combined_shape.svg';

const Search: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const search = useSelector(({ search }: ISearchStore) => search.value);
  const isMainPage = useLocation().pathname === '/';

  const onChangeHandler = (value: string) => {
    dispatch(setSearchValue(value));
  };

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
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e.target.value)}
        />

        {search !== '' ? (
          <button onClick={() => dispatch(setSearchValue(''))} className="button clear-button">
            <img className="icon-img" src={clear} alt="" />
          </button>
        ) : (
          <button className="button search-button">
            <img className="icon-img" src={filters} alt="" />
          </button>
        )}

        {search !== '' && (
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
