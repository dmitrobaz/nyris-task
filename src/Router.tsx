import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Main, Results } from './pages';
import { configureStore } from './store/configureStore';

const Router: React.FC = (): JSX.Element => {
  return (
    <Provider store={configureStore}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Provider>
  );
};

export default Router;
