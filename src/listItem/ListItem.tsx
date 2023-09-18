import React from 'react';
import styles from './ListItem.module.scss';
import content from '../store/content';
import { observer } from 'mobx-react-lite';

const ListItem = observer(({ i }: { i: number }) => {
  return (
    <li className={styles.item} onClick={() => content.changeCurrent(i)}>
      {content.data[i].title}
    </li>
  );
});

export default ListItem;
