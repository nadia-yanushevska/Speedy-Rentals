import { useSelector } from 'react-redux';
import AdvertItem from '../AdvertItem/AdvertItem';
import s from './AdvertList.module.css';
import { selectAdverts } from '../../redux/adverts/selectors';

function AdvertList() {
    const adverts = useSelector(selectAdverts);
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
