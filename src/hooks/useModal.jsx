import React from 'react';

function useModal() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return { modalIsOpen, openModal, closeModal };
}

export default useModal;
