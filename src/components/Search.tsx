import React from 'react';

import settings from '../assets/img/icons/settings.png'

interface ISearchProps {
    icon?: string,
    description?: string
}

const Search: React.FC<ISearchProps> = ({ icon, description }): JSX.Element => {
    return (
        <section className="search-wrapper">
            {icon && <p className="language-icon">
                <img src={icon} alt="" />
            </p>}
            <p className="search">
                <input type="text"
                    className="search-input"
                    placeholder='Search in Trumpf catalogue'
                />
                <input type="image" className="search-button" alt="Settings" src={settings} />
            </p>
            {description && <p className="search-descr">{description}</p>}
        </section>
    );
};

export default Search;