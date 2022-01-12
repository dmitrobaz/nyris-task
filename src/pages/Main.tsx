import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { AddPhoto, Header } from '../components';

import { getItemsConfig } from '../store/items/actions';

import response from '../config/response.json';

const Main: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsConfig(response.results));
  }, []);
  return (
    <>
      <Header />
      <AddPhoto />
    </>
  );
};

export default Main;
