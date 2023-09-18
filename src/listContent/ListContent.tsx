import React from 'react';
import styles from './ListContent.module.scss'
import ListText from '../listText/ListText';

const ListContent = () => {
  return (
    <div className={styles.content}>
      <ListText/>
      <ListText/>
      <ListText/>
      <ListText/>
    </div>
  );
};

export default ListContent;