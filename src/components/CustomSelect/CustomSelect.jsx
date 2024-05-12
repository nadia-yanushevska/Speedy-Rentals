import { Field } from 'formik';
import s from './CustomSelect.module.css';

function CustomSelect({ name = 'color', values = ['red', 'green', 'blue'] }) {
    return (
        <Field as="select" name={name}>
            {values.map((value, idx) => {
                return (
                    <option key={idx} value={value}>
                        {value}
                    </option>
                );
            })}
        </Field>
    );
}

export default CustomSelect;
