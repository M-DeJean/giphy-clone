import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import './App.css'
//Lazy loading components in order for Suspense to work
const Header = React.lazy(() => import('../Header/Header'))
const Search = React.lazy(() => import('../Search/Search'))
const Details = React.lazy(() => import('../Details/Details'))
export default function App() {

  return (
    //Wrapping components in Suspense with spinner fallback
    <main className='App'>
      <Suspense
        fallback={<i className="fas fa-spinner fa-pulse"></i>}>
        <Header />
        <Route
          exact
          path={'/:search'}
          component={(props) => <Search {...props} />}
        />
        <Route
          exact
          path={'/:url/:id'}
          component={(props) => <Details {...props} />}
        />
      </Suspense>
    </main>
  );
}