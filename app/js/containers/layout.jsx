import React from 'react'

import Header from 'components/header'

import styles from 'styles/main.scss';

export default class Layout extends React.Component {
    render() {
        return (
            <div className={styles.layout}>
                <Header />
                {this.props.children}
            </div>
        )
    }
}