import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {ReactHeight} from 'react-height';

import styles from '../../styles/Item.scss';

class ExpandingArea extends Component {
    constructor(props) {
        super(props);

        this.updateHeight = this.updateHeight.bind(this);
        this.state = {
            height: 150,
        };
    }
    updateHeight(height) {
        this.setState({height});
    }
    render() {
        const {children, isSelected, onSelect, title} = this.props;
        const expandingAreaClasses = classnames(styles.expandingArea, {
            [styles.expanded]: isSelected,
        });
        const arrowClasses = classnames(styles.arrow, {
            [styles.arrowExpanded]: isSelected,
        })
        const {height} = this.state;
        const maxHeight = isSelected ? height : 0;
        
        return (
            <div className={styles.expandingAreaWrapper} onClick={onSelect}>
                <div className={styles.expandingAreaTitle}><img className={arrowClasses} src="../../assets/arrow-collapsed.png" />{title}</div>
                <div className={expandingAreaClasses} style={{maxHeight}}>
                    <ReactHeight onHeightReady={this.updateHeight}>
                        <div>{children}</div>
                    </ReactHeight>
                </div>
            </div>
        );
        
    }
}

ExpandingArea.propTypes = {
    children: PropTypes.node.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export default ExpandingArea;
