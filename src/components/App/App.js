import React from 'react';
// import Header from '../Header/Header'
import HeaderHook from '../Header/HeaderHook';
import Search from '../Search/Search';
import Trending from '../Trending/Trending';
import Details from '../Details/Details'
import { Route } from 'react-router-dom';
import './App.css'
export default function App() {
  return (
    <main className='App'>
      <HeaderHook />
      <Route
        exact
        path={'/search'}
        component={Search}
      />
      <Route
        exact
        path={'/trending'}
        component={Trending}
      />
      <Route
        exact
        path={'/:url/:id'}
        component={Details}
      />
    </main>
  );
}