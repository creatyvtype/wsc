import React from 'react'

import styles from 'styles/NavBar.scss'

import { navItems, home } from '../../data/navItems';

const Header = () => (
    <div className={styles.wrapper}>
        <div className={styles.navItemsWrapper}>
            {navItems.map(item => (
                <div className={styles.navItem} key={item}>{item}</div>
            ))}
        </div>
        <div className={styles.homeWrapper}>
            {home}
        </div>
    </div>
);

export default Header;
