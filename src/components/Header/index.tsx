import React from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Search } from '..';

import logo from '../../assets/img/logo.svg';

const Header: React.FC = (): JSX.Element => {
  const isMainPage = useLocation().pathname === '/';

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
      <Search />
    </header>
  );
};

export default Header;
