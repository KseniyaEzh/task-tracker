import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Panel } from 'features/panel';

const MainPage = lazy(() => import('./main'));

export const Routing = () => {
  return (
    <BrowserRouter>
      <Panel />
      <Routes>
        <Route path="/" element={ <MainPage /> } />
      </Routes>
    </BrowserRouter>
  );
};