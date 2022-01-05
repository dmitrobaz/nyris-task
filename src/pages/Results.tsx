import React from 'react';
import { Header, ResultCard, Search } from '../components';

import response from '../config/response.json'

const Results: React.FC = (): JSX.Element => {
    console.log(response);

    return (
        <>
            <Header />
            <Search />
            <main className='results'>
                <ul className="results-wrapper">
                    {response.results.map((item: { [name: string]: any }) => {
                        return < ResultCard image={item.images[0]} title={item.title} id={item.ids.iD_BaaN} />
                    })}
                </ul>
            </main>
        </>
    );
};

export default Results;