import { getKeyWords } from '../../helpers/advertHelper';
import useModal from '../../hooks/useModal';
import CustomModal from '../AdvertModal/AdvertModal';
import CustomButton from '../CustomButton/CustomButton';
import s from './AdvertItem.module.css';

function AdvertItem({ advert }) {
    const { img, make, model, year, rentalPrice, address, rentalCompany, type, id, functionalities } = advert;
    const { modalIsOpen, openModal, closeModal } = useModal();
    return (
        <>
            <div className={s.card}>
                <img className={s.img} src={img} alt={make + ', ' + model} />
                <div className={s.text}>
                    <p className={s.left}>
                        {make} <span className={s.colored}>{model}</span>, {year}
                    </p>
                    <p className={s.right}>{rentalPrice}</p>
                </div>
                <ul className={s.list}>
                    {getKeyWords(address, rentalCompany, type, id, functionalities).map((word, idx) => {
                        return (
                            <li className={s.item} key={idx}>
                                {word}
                            </li>
                        );
                    })}
                </ul>
                <CustomButton onClick={() => openModal()}>Learn More</CustomButton>
            </div>

            <CustomModal advertID={id} modalIsOpen={modalIsOpen} closeModal={closeModal} />
        </>
    );
}

export default AdvertItem;
