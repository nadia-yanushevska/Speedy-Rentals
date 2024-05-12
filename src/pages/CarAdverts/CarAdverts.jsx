import AdvertForm from '../../components/AdvertForm/AdvertForm';
import AdvertList from '../../components/AdvertList/AdvertList';
import s from './CarAdverts.module.css';

function CarAdverts() {
    return (
        <div className={s.div}>
            <AdvertForm />
            <AdvertList />
        </div>
    );
}

export default CarAdverts;
