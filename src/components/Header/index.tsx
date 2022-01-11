import React, { SetStateAction, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from '..';

import logo from '../../assets/img/logo.svg';

interface IHeader {
  searchValue: string;
  setSearchValue: React.Dispatch<SetStateAction<string>>;
}

const Header: React.FC<IHeader> = ({ searchValue, setSearchValue }): JSX.Element => {
  const isMainPage = window.location.pathname === '/';

  const navigate = useNavigate();

  const handleClick = (link: string = '/') => {
    navigate(link);
  };

  return (
    <header className={isMainPage ? '' : 'fixed-header'}>
      <section className="header">
        <button onClick={() => handleClick()} className="logo">
          <img src={logo} alt="Nyris logo" />
        </button>
      </section>
      <Search isMainPage={isMainPage} value={searchValue} setValue={setSearchValue} />
    </header>
  );
};

export default Header;
