import s from './CustomButton.module.css';

function CustomButton({ children, type = 'button' }) {
    return (
        <button className={s.btn} type={type}>
            {children}
        </button>
    );
}

export default CustomButton;
