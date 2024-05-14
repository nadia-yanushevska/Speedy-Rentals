import clsx from 'clsx';
import { conditionsSplitter, getExtendedKeyWords, splitCamelCase } from '../../helpers/advertHelper';
import s from './ExtendedAdvertItem.module.css';

function ExtendedAdvertItem({ advert }) {
    const { img, make, model, year, rentalPrice, address, rentalCompany, type, id, fuelConsumption, engineSize, functionalities, accessories, description, rentalConditions } = advert;
    return (
        <div className={s.card}>
            <img className={s.img} src={img} alt={make + ', ' + model} />
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
        </div>
    );
}

export default ExtendedAdvertItem;
