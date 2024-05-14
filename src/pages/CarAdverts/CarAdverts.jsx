import { useDispatch, useSelector } from 'react-redux';
import AdvertForm from '../../components/AdvertForm/AdvertForm';
import AdvertList from '../../components/AdvertList/AdvertList';
import s from './CarAdverts.module.css';
import { useEffect } from 'react';
import { fetchAdverts } from '../../redux/adverts/operations';
import CustomButton from '../../components/CustomButton/CustomButton';
import { selectLength, selectPage } from '../../redux/adverts/selectors';
import { reachedMaxPage } from '../../helpers/paginationHelper';

function CarAdverts() {
    const pageID = useSelector(selectPage);
    const length = useSelector(selectLength);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAdverts({ pageID, length }))
    }, [dispatch]);
    return (
        <div className={s.div}>
            <AdvertForm />
            <div className={s.list_wrapper}>
                <AdvertList />
                {!reachedMaxPage(pageID, length) && (
                    <CustomButton
                        onClick={() => {
                            dispatch(fetchAdverts({ pageID, length }));
                        }}
                    >
                        Load next
                    </CustomButton>
                )}
            </div>
        </div>
    );
}

export default CarAdverts;
