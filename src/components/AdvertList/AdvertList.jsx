import { useSelector } from 'react-redux';
import AdvertItem from '../AdvertItem/AdvertItem';
import s from './AdvertList.module.css';
import { selectAdverts, selectFilter, selectLoading } from '../../redux/adverts/selectors';
import { selectFavorites } from '../../redux/favorites/slice';
import Loader from '../Loader/Loader';

function AdvertList({ isFavorites = false }) {
    let adverts = useSelector(isFavorites ? selectFavorites : selectAdverts);
    const filteredAdverts = useSelector(selectFilter);
    const loading = useSelector(selectLoading);

    if (!isFavorites && filteredAdverts.length > 0) {
        adverts = filteredAdverts;
    }

    return (
        <>
            {!loading && adverts.length === 0 ? (
                <p className={s.notification}>List is empty.</p>
            ) : (
                <ul className={s.list}>
                    {adverts.map(ad => {
                        return (
                            <li key={ad.id}>
                                <AdvertItem advert={ad} />
                            </li>
                        );
                    })}
                </ul>
            )}
            {loading && <Loader />}
        </>
    );
}

export default AdvertList;
