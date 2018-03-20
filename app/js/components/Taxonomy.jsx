import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';

import styles from '../../styles/Item.scss';

const Taxonomy = ({ item, imageOption }) => {
    const L1 = get(item, 'taxonomy.L1');
    const L2 = get(item, 'taxonomy.L2');
    const L3 = get(item, 'taxonomy.L3');

    return (
        <div className={styles.taxonomy}>
            <div>Home</div><div>{`>`}</div>
            <div>{L1}</div><div>{`>`}</div>
            <div>{L2}</div><div>{`>`}</div>
            <div>{L3}</div><div>{`>`}</div>
            <div className={styles.currentTier}>{imageOption.title}</div>
        </div>
    );
}

Taxonomy.propTypes = {
    item: PropTypes.object.isRequired,
    imageOption: PropTypes.object.isRequired,
}

export default Taxonomy;
