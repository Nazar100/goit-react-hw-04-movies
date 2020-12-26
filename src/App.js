import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import './App.css';
import Navbar from './components/Navbar/Navbar';

const HomePageView = lazy(() =>
  import('./views/HomePageView/HomePageView' /* webpackChunkName: "e-view" */),
);
const MoviesPageView = lazy(() =>
  import(
    './views/MoviesPageView/MoviesPageView' /* webpackChunkName: "hme-view" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "home-vie" */
  ),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "home-w" */),
);

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomePageView />
          </Route>

          <Route path="/movies/:movieID">
            <MovieDetailsPage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPageView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
