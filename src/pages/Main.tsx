import React, { useState } from 'react';

import { AddPhoto, Header } from '../components';

const Main: React.FC = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');
  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <AddPhoto />
    </>
  );
};

export default Main;
