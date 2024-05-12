import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
    return clsx(s.nav_link, isActive && s.active);
};

function Navigation() {
    return (
        <nav className={s.nav}>
            <NavLink to="/" className={buildLinkClass}>
                Home
            </NavLink>
            <NavLink to="/adverts" className={buildLinkClass}>
                Adverts
            </NavLink>
            <NavLink to="/favorites" className={buildLinkClass}>
                Favorites
            </NavLink>
        </nav>
    );
}

export default Navigation;
