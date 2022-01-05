import React from 'react';

import { AddPhoto, Header, Search } from '../components';

import combined_shape from '../assets/img/combined_shape.png'


const Main: React.FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <Search
                icon={combined_shape}
                description='Search by any name, category, SKU or keyword.'
            />
            <AddPhoto />
        </>
    );
};

export default Main;