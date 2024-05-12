import { Link } from 'react-router-dom';
import s from './PageNotFound.module.css';
import { TbFaceIdError } from 'react-icons/tb';

function PageNotFound() {
    return (
        <div className={s.div}>
            <h1 className={s.title}>404 Error</h1>
            <p className={s.text}>Page not Found</p>
            <TbFaceIdError className={s.icon} size={68} />
            <Link className={s.link} to="/">
                Go to Home
            </Link>
        </div>
    );
}

export default PageNotFound;
