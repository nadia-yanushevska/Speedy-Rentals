import { useSelector } from 'react-redux';
import AdvertItem from '../AdvertItem/AdvertItem';
import s from './AdvertList.module.css';
import { selectAdverts } from '../../redux/adverts/selectors';
import { selectFavorites } from '../../redux/favorites/slice';

function AdvertList({ isFavorites = false }) {
    const adverts = useSelector(isFavorites ? selectFavorites : selectAdverts);
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
