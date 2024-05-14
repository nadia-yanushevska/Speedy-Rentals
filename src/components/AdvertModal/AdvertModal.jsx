import Modal from 'react-modal';
import s from './AdvertModal.module.css';
import { useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/adverts/selectors';
import ExtendedAdvertItem from '../ExtendedAdvertItem/ExtendedAdvertItem';
import { IoClose } from 'react-icons/io5';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(247, 244, 241, .7)',
        zIndex: 10,
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: 'fit-content',
        height: 'fit-content',
        padding: 0,
        position: 'relative',
        borderRadius: '8px',
        boxShadow: '37px 37px 74px #afafaf, -37px -37px 74px #ffffff',
        border: '1px solid darkslategrey',
    },
};

Modal.setAppElement('body');

function CustomModal({ modalIsOpen, closeModal, advertID }) {
    const advert = useSelector(selectAdverts).find(advert => advert.id === advertID);
    return (
        <div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Custom Modal">
                <button className={s.close_btn} type="button" onClick={closeModal}>
                    <IoClose size={24} />
                </button>
                <ExtendedAdvertItem advert={advert} />
            </Modal>
        </div>
    );
}

export default CustomModal;
