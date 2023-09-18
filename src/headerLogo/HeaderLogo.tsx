import React from 'react';
import styles from './HeaderLogo.module.scss';
import logo from './../../public/logo.png';

const HeaderLogo = () => {
  return <img className={styles.logo} src={logo} alt="logo" />;
};

export default HeaderLogo;
