import React from 'react';
import styles from './Main.module.scss';
import ListHeader from '../listHeader/ListHeader';
import ListContent from '../listContent/ListContent';
import { observer } from 'mobx-react-lite';
import content from '../store/content';

const Main = observer(() => {
  return <main className={styles.main}>
    <ListHeader i={content.current}/>
    <ListContent i={content.current}/>
  </main>;
});

export default Main;
