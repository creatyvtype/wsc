import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from '../../styles/Modal.scss';
const modalRoot = document.getElementById('modal-root');

const MODAL_STATES = {
    CLOSED: 'CLOSED',
    OPEN: 'OPEN',
    CLOSING: 'CLOSING',
    OPENING: 'OPENING',
};

class Modal extends Component {
    constructor(props) {
        super(props);

        this.cleanupOnClose = this.cleanupOnClose.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
        this.openModal = this.openModal.bind(this);
        this.renderModal = this.renderModal.bind(this);

        this.el = document.createElement('div');

        this.state = {
            modalState: MODAL_STATES.CLOSED,
        };
    }

    componentDidMount() {
        if (this.props.isOpen && this.state.modalState === MODAL_STATES.CLOSED) {
            this.openModal();
        }
    }
    componentDidUpdate() {
        if (this.state.modalState === MODAL_STATES.OPENING) {
            this.setState({
                modalState: MODAL_STATES.OPEN
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen && this.state.modalState !== MODAL_STATES.OPENING) {
            this.openModal();
        } else if (!nextProps.isOpen && this.state.modalState !== MODAL_STATES.CLOSING) {
            this.closeModal();
        };
    }

    closeModal() {
        this.setState({
            modalState: MODAL_STATES.CLOSING
        })
    }

    cleanupOnClose() {
        modalRoot.removeChild(this.el);
        document.removeEventListener('keydown', this.handleKeydown);
    }

    handleKeydown(e: KeyboardEvent) {
        switch (e.key) {
            case "Esc":
            case "Escape":
                this.props.closeModal();
                break;
            default: break;
        }
    }

    handleInsideClick(e) {
        e.stopPropagation();
    }

    openModal() {
        modalRoot.appendChild(this.el)
        document.addEventListener('keydown', this.handleKeydown);

        this.setState({
            modalState: MODAL_STATES.OPENING,
        });
    }

    renderModal() {
        const {children, closeModal} = this.props;
        const { modalState } = this.state;
        const overlayClasses = classnames(styles.modalOverlay, {
            [styles.modalOpen]: modalState === MODAL_STATES.OPEN,
        });

        let onTransitionEnd;;
        if (modalState === MODAL_STATES.CLOSING) {
            onTransitionEnd = this.cleanupOnClose;
        }
        return (
            <div className={overlayClasses} onTransitionEnd={onTransitionEnd} onClick={closeModal}>
                <div className={styles.modal} onClick={this.handleInsideClick}>
                    {children}
                </div>
            </div>
        );
    }

    render() {
        if (this.state.modalState !== MODAL_STATES.CLOSED) {
            return ReactDOM.createPortal(
                this.renderModal(),
                this.el,
            );
        } else {
            return null;
        }
    }
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
}

export default Modal;
