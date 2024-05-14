import clsx from 'clsx';
import { conditionsSplitter, getExtendedKeyWords, splitCamelCase } from '../../helpers/advertHelper';
import s from './ExtendedAdvertItem.module.css';
import { Link } from 'react-router-dom';
import LikeButton from '../LikeButton/LikeButton';

function ExtendedAdvertItem({ advert }) {
    const {
        img,
        make,
        model,
        year,
        rentalPrice,
        address,
        rentalCompany,
        rentalPhoneNumber = '+380730000000',
        type,
        id,
        fuelConsumption,
        engineSize,
        functionalities,
        accessories,
        description,
        rentalConditions,
    } = advert;
    return (
        <div className={s.card}>
            <div className={s.img_wrapper}>
                <LikeButton advert={advert} />
                <img className={s.img} src={img} alt={make + ', ' + model} />
            </div>
            <div className={s.text}>
                <p className={s.left}>
                    {make} <span className={s.colored}>{model}</span>, {year}
                </p>
                <p className={s.right}>{rentalPrice}</p>
            </div>
            <ul className={s.list}>
                {Object.entries(getExtendedKeyWords({ address, id, year, type, rentalCompany, fuelConsumption, engineSize })).map((pair, idx) => {
                    return (
                        <li className={s.item} key={idx}>
                            {idx > 1 && splitCamelCase(pair[0]) + ':'} {pair[1]}
                        </li>
                    );
                })}
            </ul>
            <p>{description}</p>
            <p>Accessories and functionalities:</p>
            <ul className={s.list}>
                {[...accessories, ...functionalities].map((elem, idx) => {
                    return (
                        <li className={s.item} key={idx}>
                            {elem}
                        </li>
                    );
                })}
            </ul>
            <p>Rental Conditions:</p>
            <ul className={clsx(s.rent_list, s.list)}>
                {conditionsSplitter(rentalConditions).map((condition, idx) => {
                    const conditionArr = condition.split(': ');
                    return conditionArr.length > 1 ? (
                        <li className={s.rent_item} key={idx}>
                            {conditionArr[0]}: <span className={s.colored}>{conditionArr[1]}</span>
                        </li>
                    ) : (
                        <li className={s.rent_item} key={idx}>
                            {condition}
                        </li>
                    );
                })}
            </ul>
            <Link className={s.link_btn} to={'tel:' + rentalPhoneNumber}>
                Rental car
            </Link>
        </div>
    );
}

export default ExtendedAdvertItem;
