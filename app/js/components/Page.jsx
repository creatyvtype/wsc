import React, { Component, Fragment } from 'react';
import get from 'lodash.get';
import item from '../../data/item';

import ImageContainer from './ImageContainer';
import DetailsContainer from './DetailsContainer';

import styles from '../../styles/Item.scss';

class Page extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);

        this.state = {
            imageOption: get(item, 'imageOptions[0]'),
        };
    }
    onChange({imageOption}) {
        this.setState({
            imageOption
        });
    }
    render() {
        const { imageOption } = this.state;
        return (
            <div className={styles.itemPageWrapper}>
                <ImageContainer item={item} onChange={this.onChange} imageOption={imageOption} />
                <DetailsContainer item={item} currentTitle={imageOption.title} />
            </div>
        );
        
    }
};

export default Page;
