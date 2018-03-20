import React, { Component } from "react";
import PropTypes from "prop-types";

import ExpandingArea from "./ExpandingArea";

import itemContent from "../../data/itemContent";
import styles from "../../styles/Item.scss";

class DetailsContainer extends Component {
    constructor(props) {
        super(props);

        this.expandArea = this.expandArea.bind(this);

        this.state = {
            currentExpandedIndex: null
        };
    }

    expandArea({ currentExpandedIndex }) {
        this.setState({
            currentExpandedIndex
        });
    }
    render() {
        const { item, currentTitle } = this.props;
        const { currentExpandedIndex } = this.state;
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
                    defaultValue="1"
                />
                <div className={styles.cartButton}>
                    <img src="../../assets/button-add-to-cart.png" />
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
            </div>
        );
    }
}

DetailsContainer.propTypes = {
    item: PropTypes.object.isRequired,
    currentTitle: PropTypes.string.isRequired
};

export default DetailsContainer;
