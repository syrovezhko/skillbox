import React from 'react';
import styles from './ListText.module.scss';

const ListText = ({ text }: { text: string }) => {
  return (
    <p className={styles.text}>
      {text}
    </p>
  );
};

export default ListText;
