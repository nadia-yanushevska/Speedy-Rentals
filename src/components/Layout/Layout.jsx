import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import s from './Layout.module.css';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';

function Layout() {
    return (
        <div className={s.div}>
            <Navigation />
            <Suspense fallback={<Loader />}>
                <div className={s.container}>
                    <Outlet />
                </div>
            </Suspense>
        </div>
    );
}

export default Layout;
