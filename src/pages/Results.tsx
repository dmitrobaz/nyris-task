import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Footer, Header, ResultCard } from '../components';

import { IItemsStore, ISearchStore, IItems } from '../types/interface';

import { getItemsConfig } from '../store/items/actions';

import response from '../config/response.json';

const Results: React.FC = (): JSX.Element => {
  const items = useSelector(({ items }: IItemsStore) => items.data);
  const search = useSelector(({ search }: ISearchStore) => search.value);

  const [config, setConfig] = useState<IItems[]>(items);

  const dispatch = useDispatch();

  const filteredCategory = (value: string) => {
    if (value !== '') {
      const inputValueLowerCase = value.toLowerCase();
      return items.filter((item: IItems) => {
        const lowerCaseString = item.categories[0].toLowerCase();
        return lowerCaseString.indexOf(inputValueLowerCase) > -1;
      });
    } else {
      return response.results;
    }
  };

  useEffect(() => {
    setConfig(filteredCategory(search));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    dispatch(getItemsConfig(response.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <main className="results">
        <ul className="results-wrapper">
          {config.length > 0 ? (
            config.map((item: IItems, index: number) => {
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
