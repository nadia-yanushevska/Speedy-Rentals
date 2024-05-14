import clsx from 'clsx';
import s from './CustomButton.module.css';

function CustomButton({ children, type = 'button', onClick = () => {}, addShadow = false }) {
    return (
        <button className={clsx(s.btn, addShadow && s.btn_shadow)} type={type} onClick={onClick}>
            {children}
        </button>
    );
}

export default CustomButton;
