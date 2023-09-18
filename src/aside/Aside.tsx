import React from 'react';
import styles from './Aside.module.scss';
import List from '../list/List';

const Aside = () => {
  return <aside className={styles.aside}>
    <List/>
  </aside>;
};

export default Aside;
