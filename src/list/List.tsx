import React, { useEffect } from 'react';
import styles from './List.module.scss';
import ListItem from '../listItem/ListItem';
import { observer } from 'mobx-react-lite';
import content from '../store/content';

const List = observer(() => {
  useEffect(() => {
    content.fetchData();
  }, []);
  return (
    <ul className={styles.list}>
      {Boolean(content.data.length) && content.data.map((_:any, i:number) => <ListItem key={i} i={i}/>)}
    </ul>
  );
});

export default List;
