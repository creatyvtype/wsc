import React, {Component} from 'react'

import Header from 'components/Header'
import NavBar from 'components/NavBar'
import Page from 'components/Page';

import styles from 'styles/main.scss';

export default class App extends Component {
    render() {
        return (
            <div className={styles.layout}>
                <Header />
                <NavBar />
                <div className={styles.page}>
                    <Page />
                </div>
            </div>
        )
    }
}