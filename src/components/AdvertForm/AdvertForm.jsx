import { Form, Formik } from 'formik';
import s from './AdvertForm.module.css';
import CustomButton from '../CustomButton/CustomButton';
import CustomSelect from '../CustomSelect/CustomSelect';

function AdvertForm() {
    return (
        <Formik initialValues={{}} onSubmit={() => {}}>
            <Form className={s.div}>
                <CustomSelect />
                <CustomButton>Search</CustomButton>
            </Form>
        </Formik>
    );
}

export default AdvertForm;
