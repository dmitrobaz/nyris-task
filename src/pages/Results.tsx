import React, { useEffect, useState } from 'react';
import { Footer, Header, ResultCard, Search } from '../components';

import response from '../config/response.json';

const Results: React.FC = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [config, setConfig] = useState(response.results);

  const filteredCategory = (value: string) => {
    if (value !== '') {
      const inputValueLowerCase = value.toLowerCase();
      return response.results.filter((item) => {
        const lowerCaseString = item.categories[0].toLowerCase();
        return lowerCaseString.indexOf(inputValueLowerCase) > -1;
      });
    } else {
      return response.results;
    }
  };

  useEffect(() => {
    setConfig(filteredCategory(searchValue));
  }, [searchValue]);

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <main className="results">
        <ul className="results-wrapper">
          {config.length > 0 ? (
            config.map((item, index: number) => {
              return (
                <ResultCard
                  key={index}
                  image={item.images[0]}
                  title={item.title}
                  id={item.ids.iD_BaaN}
                />
              );
            })
          ) : (
            <li className="results-no-result">No results</li>
          )}
        </ul>
      </main>
      <Footer config={config} />
    </>
  );
};

export default Results;
