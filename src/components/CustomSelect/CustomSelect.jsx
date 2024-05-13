import Select from 'react-select';
import s from './CustomSelect.module.css';
import makes from '../../assets/carMakes.json';
import { getSelectOptions, styleSelect } from '../../helpers/selectHelpers';
import { useState } from 'react';
import { IoMdArrowDropup } from 'react-icons/io';
import clsx from 'clsx';

function CustomSelect({ name = 'makes', values = ['All', ...makes], placeholder = 'All', paddingLeft = 0 }) {
    const [selectIsOpen, setSelectIsOpen] = useState(false);

    return (
        <Select
            className={clsx(s.select, name === 'price' && s.smaller)}
            name={name}
            id={name}
            placeholder={placeholder}
            closeMenuOnSelect={true}
            isSearchable={name === 'makes' ? true : false}
            options={getSelectOptions(values)}
            styles={paddingLeft === 0 ? styleSelect() : styleSelect(`12px 20px 12px ${paddingLeft}px`)}
            onMenuOpen={() => {
                setSelectIsOpen(true);
            }}
            onMenuClose={() => {
                setSelectIsOpen(false);
            }}
            components={{
                DropdownIndicator: () => {
                    return selectIsOpen ? <IoMdArrowDropup className={s.icon} size={36} /> : <IoMdArrowDropup className={clsx(s.icon, s.transformed)} size={36} />;
                },
            }}
        />
    );
}

export default CustomSelect;
