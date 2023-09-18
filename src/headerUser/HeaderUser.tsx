import React from 'react';
import styles from './HeaderUser.module.scss';
import user from './../../public/user.png';

const HeaderUser = () => {
  return <img className={styles.user} src={user} alt="logo" />;
};

export default HeaderUser;
