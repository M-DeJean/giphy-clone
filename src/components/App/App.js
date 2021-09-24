import React, { Suspense } from 'react';
// import Header from '../Header/Header'
// import Header from '../Header/Header';
import Search from '../Search/Search';
import Trending from '../Trending/Trending';
import Details from '../Details/Details'
import { Route } from 'react-router-dom';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import './App.css'
const Header = React.lazy(() => import('../Header/Header'))
// const Search = React.lazy(() => import('../Search/Search'));
export default function App() {
  return (
    <main className='App'>
      <Suspense
        fallback={<i className="fas fa-spinner fa-pulse"></i>}>
        <Header />
        <Route
          exact
          path={'/search'}
          component={(props) => <Search {...props} />}
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
      </Suspense>
    </main>
  );
}