import React, {Component} from 'react'

import Header from 'components/Header'
import NavBar from 'components/NavBar'

import styles from 'styles/main.scss';

export default class App extends Component {
    render() {
        return (
            <div className={styles.layout}>
                <Header />
                <NavBar />
                {this.props.children}
            </div>
        )
    }
}