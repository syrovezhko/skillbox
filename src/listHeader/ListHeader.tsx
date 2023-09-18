import React from 'react';
import styles from './ListHeader.module.scss'
import { observer } from 'mobx-react-lite';
import content from '../store/content';

const ListHeader = observer(({ i }: { i: number }) => {
  console.log("content.data[i]", content.data[i])
  return (
    <h2 className={styles.header}>
      {content.data[i].title}
    </h2>
  );
});

export default ListHeader;