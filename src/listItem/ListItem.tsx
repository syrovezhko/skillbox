import React from 'react';
import styles from './ListItem.module.scss'
import ListHeader from '../listHeader/ListHeader';

const ListItem = () => {
  return (
    <li className={styles.item}>
      <ListHeader/>
    </li>
  );
};

export default ListItem;