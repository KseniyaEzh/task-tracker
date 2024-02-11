import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainPage = lazy(() => import('./main'));

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage /> } />
      </Routes>
    </BrowserRouter>
  );
};