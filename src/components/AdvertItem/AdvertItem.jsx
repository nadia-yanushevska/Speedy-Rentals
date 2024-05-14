import { getKeyWords } from '../../helpers/advertHelper';
import useModal from '../../hooks/useModal';
import CustomModal from '../AdvertModal/AdvertModal';
import CustomButton from '../CustomButton/CustomButton';
import s from './AdvertItem.module.css';
import LikeButton from '../LikeButton/LikeButton';
import { nanoid } from '@reduxjs/toolkit';

function AdvertItem({ advert }) {
    const { img, make, model, year, rentalPrice, address, rentalCompany, type, id, functionalities } = advert;
    const { modalIsOpen, openModal, closeModal } = useModal();

    return (
        <>
            <div className={s.card}>
                <div className={s.img_wrapper}>
                    <LikeButton advert={advert} />
                    <img className={s.img} src={img} alt={make + ', ' + model} />
                </div>
                <div className={s.content_wrapper}>
                    <div className={s.text}>
                        <p>
                            {make} <span className={s.colored}>{model}</span>, {year}
                        </p>
                        <p>{rentalPrice}</p>
                    </div>
                    <ul className={s.list}>
                        {getKeyWords(address, rentalCompany, type, id, functionalities).map(word => {
                            return <li key={nanoid()}>{word}</li>;
                        })}
                    </ul>
                    <CustomButton onClick={openModal}>Learn More</CustomButton>
                </div>
            </div>

            <CustomModal advertID={id} modalIsOpen={modalIsOpen} closeModal={closeModal} />
        </>
    );
}

export default AdvertItem;
