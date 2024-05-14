import s from './LikeButton.module.css';
import { isFavorite } from '../../helpers/advertHelper';
import { addFavorite, deleteFavorite, selectFavorites } from '../../redux/favorites/slice';
import { FcLike } from 'react-icons/fc';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

function LikeButton({ advert }) {
    const favorites = useSelector(selectFavorites);
    const dispatch = useDispatch();

    return (
        <button
            className={clsx(s.likeBtn, isFavorite(advert, favorites) && s.liked)}
            type="button"
            onClick={() => {
                isFavorite(advert, favorites) ? dispatch(deleteFavorite(advert.id)) : dispatch(addFavorite(advert));
            }}
        >
            <FcLike size={32} />
        </button>
    );
}

export default LikeButton;
