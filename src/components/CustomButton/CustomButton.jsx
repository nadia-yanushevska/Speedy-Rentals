import s from './CustomButton.module.css';

function CustomButton({ children, type = 'button', onClick = () => {} }) {
    return (
        <button className={s.btn} type={type} onClick={onClick}>
            {children}
        </button>
    );
}

export default CustomButton;
