import { Form, Formik } from 'formik';
import s from './AdvertForm.module.css';
import CustomButton from '../CustomButton/CustomButton';
import CustomSelect from '../CustomSelect/CustomSelect';
import { range } from '../../helpers/selectHelpers';
import { IoMdSearch } from 'react-icons/io';

function AdvertForm() {
    return (
        <Formik initialValues={{}} onSubmit={() => {}}>
            <Form className={s.form}>
                <div className={s.form_wrapper}>
                    <CustomSelect />
                    <div className={s.input_wrapper}>
                        <label className={s.label} htmlFor="price">
                            To
                        </label>
                        <CustomSelect name={'price'} values={range({ from: 30, to: 300, step: 10 })} placeholder="" paddingLeft={52} />
                    </div>
                </div>
                <div className={s.form_wrapper}>
                    <div className={s.input_wrapper}>
                        <label className={s.label} htmlFor="mileageFrom">
                            From
                        </label>
                        <CustomSelect name={'mileageFrom'} values={range({ from: 1000, to: 10000, step: 500 })} placeholder="" paddingLeft={84} />
                    </div>
                    <div className={s.input_wrapper}>
                        <label className={s.label} htmlFor="mileageFrom">
                            To
                        </label>
                        <CustomSelect name={'mileageFrom'} values={range({ from: 1000, to: 10000, step: 500 })} placeholder="" paddingLeft={52} />
                    </div>
                    <CustomButton type="submit">
                        <IoMdSearch size={32} />
                    </CustomButton>
                </div>
            </Form>
        </Formik>
    );
}

export default AdvertForm;
