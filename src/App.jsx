import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './pages/Home/Home';
// import CarAdverts from './pages/CarAdverts/CarAdverts';
// import Favorites from './pages/Favorites/Favorites';
// import PageNotFound from './pages/PageNotFound/PageNotFound';
import Layout from './components/Layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const CarAdverts = lazy(() => import('./pages/CarAdverts/CarAdverts'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="adverts" element={<CarAdverts />} />
                    <Route path="favorites" element={<Favorites />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
            {/* <button type="button" onClick={async () => console.log(await get_cars())}>
                Get contacts
            </button>
            <button type="button" onClick={async () => console.log(await get_car_make())}>
                Get makes
            </button> */}
        </>
    );
}

export default App;
