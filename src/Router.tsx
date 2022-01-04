import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Main, Results } from './pages';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}

export default Router;
