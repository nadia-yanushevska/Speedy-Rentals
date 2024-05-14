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
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxWidth: '532px',
        height: 'fit-content',
        maxHeight: '80vh',
        overflow: 'auto',
        scrollbarWidth: 'thin',
        padding: 0,
        position: 'relative',
        borderRadius: '8px',
        boxShadow: '1px 1px 16px var(--blue-color), -4px -4px 16px var(--white-color)',
        border: '1px solid var(--blue-color)',
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
