import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from '../../styles/Item.scss';

const ExpandingArea = ({children, isSelected, onSelect, title}) => {
    const expandingAreaClasses = classnames(styles.expandingArea, {
        [styles.expanded]: isSelected,
    });
    const arrowClasses = classnames(styles.arrow, {
        [styles.arrowExpanded]: isSelected,
    })
    return (
        <div className={styles.expandingAreaWrapper} onClick={onSelect}>
            <div className={styles.expandingAreaTitle}><img className={arrowClasses} src="../../assets/arrow-collapsed.png" />{title}</div>
            <div className={expandingAreaClasses}>{children}</div>
        </div>
    );
}

ExpandingArea.propTypes = {
    children: PropTypes.node.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export default ExpandingArea;
