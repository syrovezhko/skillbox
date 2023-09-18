import React from 'react';
import styles from './Main.module.scss';
import ListHeader from '../listHeader/ListHeader';
import ListContent from '../listContent/ListContent';

const Main = () => {
  return <main className={styles.main}>
    <ListHeader/>
    <ListContent/>
  </main>;
};

export default Main;
