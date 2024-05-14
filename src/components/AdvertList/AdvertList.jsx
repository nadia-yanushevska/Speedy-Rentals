import { useSelector } from 'react-redux';
import AdvertItem from '../AdvertItem/AdvertItem';
import s from './AdvertList.module.css';
import { selectAdverts, selectFilter } from '../../redux/adverts/selectors';
import { selectFavorites } from '../../redux/favorites/slice';

function AdvertList({ isFavorites = false }) {
    let adverts = useSelector(isFavorites ? selectFavorites : selectAdverts);
    const filteredAdverts = useSelector(selectFilter);
    if (filteredAdverts.length > 0) adverts = filteredAdverts;
    return (
        <>
            <ul className={s.list}>
                {adverts.map(ad => {
                    return (
                        <li key={ad.id}>
                            <AdvertItem advert={ad} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default AdvertList;
