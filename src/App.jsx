import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './pages/Home/Home';
// import CarAdverts from './pages/CarAdverts/CarAdverts';
// import Favorites from './pages/Favorites/Favorites';
// import PageNotFound from './pages/PageNotFound/PageNotFound';
import Layout from './components/Layout/Layout';
import { lazy, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { getToastStyles } from './helpers/toastHelper';
import { useDispatch, useSelector } from 'react-redux';
import { selectLength } from './redux/adverts/selectors';
import { fetchAdverts } from './redux/adverts/operations';

const Home = lazy(() => import('./pages/Home/Home'));
const CarAdverts = lazy(() => import('./pages/CarAdverts/CarAdverts'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'));

function App() {
    const length = useSelector(selectLength);
    const dispatch = useDispatch();

    useEffect(() => {
        const pageID = 1;
        dispatch(fetchAdverts({ pageID, length }));
    }, [dispatch]);
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

            <Toaster {...getToastStyles()} />
        </>
    );
}

export default App;
