import React, { Component } from "react";
import PropTypes from "prop-types";

import ExpandingArea from "./ExpandingArea";
import SuccessModal from "./SuccessModal";

import itemContent from "../../data/itemContent";
import styles from "../../styles/Item.scss";

class DetailsContainer extends Component {
    constructor(props) {
        super(props);

        this.expandArea = this.expandArea.bind(this);
        this.closeSuccessModal = this.closeSuccessModal.bind(this);
        this.openSuccessModal = this.openSuccessModal.bind(this);
        this.onQuantityChange = this.onQuantityChange.bind(this);
        this.state = {
            currentExpandedIndex: null,
            successModalOpen: false,
            quantitySelected: 1
        };
    }

    expandArea({ currentExpandedIndex }) {
        this.setState({
            currentExpandedIndex
        });
    }
    closeSuccessModal() {
        this.setState({
            successModalOpen: false
        });
    }
    openSuccessModal() {
        this.setState({
            successModalOpen: true
        });
    }
    onQuantityChange(e) {
        this.setState({
            quantitySelected: Math.floor(e.target.value) || 1,
        });
    }
    render() {
        const { item, currentTitle } = this.props;
        const {
            currentExpandedIndex,
            successModalOpen,
            quantitySelected
        } = this.state;
        return (
            <div className={styles.detailsContainer}>
                <div className={styles.detailTitle}>{currentTitle}</div>
                <div className={styles.detailDescription}>
                    {item.description}
                    <ul>
                        {item.details.map(detail => (
                            <li key={detail}>{detail}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.detailPrice}>{item.price}</div>
                <input
                    className={styles.quantityInput}
                    type="number"
                    value={quantitySelected}
                    onChange={this.onQuantityChange}
                    min="1"
                    step="1"
                />
                <div
                    className={styles.cartButtonWrapper}
                >
                    <img className={styles.cartButton} src="../../assets/button-add-to-cart.png" onClick={this.openSuccessModal} />
                </div>
                <div className={styles.moreDetailsSection}>
                    {itemContent.map((content, index) => (
                        <ExpandingArea
                            key={content.id}
                            isSelected={currentExpandedIndex === index}
                            title={content.title}
                            onSelect={() =>
                                this.expandArea({ currentExpandedIndex: index })
                            }
                        >
                            {content.description}
                        </ExpandingArea>
                    ))}
                </div>
                <SuccessModal
                    isOpen={successModalOpen}
                    closeModal={this.closeSuccessModal}
                    currentTitle={currentTitle}
                    quantitySelected={quantitySelected}
                />
            </div>
        );
    }
}

DetailsContainer.propTypes = {
    item: PropTypes.object.isRequired,
    currentTitle: PropTypes.string.isRequired
};

export default DetailsContainer;
