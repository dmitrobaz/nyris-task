import React from 'react';

import logo from '../assets/img/logo.png'

const Header: React.FC = (): JSX.Element => {
    return (
        <header className="header">
            <p className="logo">
                <img src={logo} alt="Nyris logo" />
            </p>
        </header>
    );
};

export default Header;