import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routenames } from './routenames';
import { MainPage } from '../pages';

// FOR BETTER PERFORMANCE, YOU CAN USE lazy FUNCTION
// FROM react LIBRARY
// EXAMPLE:
// const Error404 = lazy(() => import('../pages/Error404/PageNotFound');
// THIS WAY THE COMPONENT WILL NOT BE LOADED UNTIL USER FOLLOWS THE ROUTE

export const Router: FC = () => (
  <Routes>
    <Route path={routenames.HOME} element={<MainPage />} />
  </Routes>
);
