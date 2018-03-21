import React from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";

import styles from "../../styles/Item.scss";

const SuccessModal = ({ isOpen, closeModal, currentTitle, quantitySelected }) => {
    const singleCopy = `The following item has been added to your cart:`;
    const pluralCopy = `The following items have been added to your cart:`;
    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <div className={styles.successModalTitle}>
                Success!
            </div>
            <div className={styles.successModalBody}>{quantitySelected > 1 ? pluralCopy : singleCopy}</div>
            <div>{currentTitle}</div>
            <div>Quantity: {quantitySelected}</div>
            <button className={styles.successCloseButton} onClick={closeModal}>Close</button>
        </Modal>
    );
};

SuccessModal.propTypes = {
    currentTitle: PropTypes.string.isRequired,
    quantitySelected: PropTypes.number.isRequired,
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
};

export default SuccessModal;
