import { BallTriangle } from 'react-loader-spinner';
import s from './Loader.module.css';

function Loader() {
    return (
        <div className={s.div}>
            <BallTriangle height={100} width={100} radius={5} color="currentColor" ariaLabel="ball-triangle-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
        </div>
    );
}

export default Loader;
