import React from 'react';
import styles from './Header.module.scss';
import HeaderLogo from '../headerLogo/HeaderLogo';
import HeaderUser from '../headerUser/HeaderUser';

const Header = () => {
  return <header className={styles.header}>
    <HeaderLogo/>
    <HeaderUser/>
  </header>;
};

export default Header;
