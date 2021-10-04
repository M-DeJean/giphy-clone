import React, { Suspense } from 'react';
// import Header from '../Header/Header'
// import Header from '../Header/Header';
// import Search from '../Search/Search';
// import Trending from '../Trending/Trending';
// import Details from '../Details/Details'
import { Route } from 'react-router-dom';
import { useGetGifsQuery } from '../../services/gifs';
import './App.css'
const Trending = React.lazy(() => import('../Trending/Trending'))
const Header = React.lazy(() => import('../Header/Header'))
const Search = React.lazy(() => import('../Search/Search'))
const Details = React.lazy(() => import('../Details/Details'))
export default function App() {

  return (
    <main className='App'>
      <Suspense
        fallback={<i className="fas fa-spinner fa-pulse"></i>}>
        <Header />
        <Route
          exact
          path={'/:search'}
          component={(props) => <Search {...props} />}
        />
        {/* <Route
          exact
          path={'/trending'}
          component={(props) => <Trending {...props} />}
        /> */}
        <Route
          exact
          path={'/:url/:id'}
          component={(props) => <Details {...props} />}
        />
      </Suspense>
    </main>
  );
}