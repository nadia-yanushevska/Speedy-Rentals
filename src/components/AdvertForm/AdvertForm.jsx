import s from './AdvertForm.module.css';
import CustomButton from '../CustomButton/CustomButton';
import CustomSelect from '../CustomSelect/CustomSelect';
import { range } from '../../helpers/selectHelpers';
import { IoMdSearch } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { filterAdverts } from '../../redux/adverts/slice';
import { prepareValues } from '../../helpers/filterHelper';
import { selectFilter } from '../../redux/adverts/selectors';
import toast from 'react-hot-toast';

function AdvertForm() {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    function onSubmit(e) {
        e.preventDefault();
        dispatch(filterAdverts(prepareValues(e.target.elements)));
        if (filter.length === 0) {
            toast('No adverts were found.');
        }
    }
    return (
        <>
            <form className={s.form} onSubmit={onSubmit}>
                <div className={s.form_wrapper}>
                    <CustomSelect />
                    <div className={s.input_wrapper}>
                        <label className={s.label} htmlFor="price">
                            To
                        </label>
                        <CustomSelect name={'price'} values={range({ from: 30, to: 300, step: 10 })} placeholder="" paddingLeft={48} />
                    </div>
                </div>
                <div className={s.form_wrapper}>
                    <div className={s.input_wrapper}>
                        <label className={s.label} htmlFor="mileageFrom">
                            From
                        </label>
                        <CustomSelect name={'mileageFrom'} values={range({ from: 1000, to: 10000, step: 500 })} placeholder="" paddingLeft={64} />
                    </div>
                    <div className={s.input_wrapper}>
                        <label className={s.label} htmlFor="mileageTo">
                            To
                        </label>
                        <CustomSelect name={'mileageTo'} values={range({ from: 1000, to: 10000, step: 500 })} placeholder="" paddingLeft={48} />
                    </div>
                    <CustomButton type="submit" addShadow={true}>
                        <IoMdSearch size={32} />
                    </CustomButton>
                </div>
            </form>
        </>
    );
}

export default AdvertForm;
