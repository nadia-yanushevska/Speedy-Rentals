import AdvertList from '../../components/AdvertList/AdvertList';
import s from './Favorites.module.css';

function Favorites() {
    return (
        <div className={s.div}>
            <AdvertList isFavorites={true} />
        </div>
    );
}

export default Favorites;
