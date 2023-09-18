import React from 'react';
import styles from './ListContent.module.scss';
import ListText from '../listText/ListText';
import content from '../store/content';

const ListContent = ({ i }: { i: number }) => {
  return (
    <div className={styles.content}>
      {content.data[i].text.map((text: string, index: number) => (
        <ListText text={text} key={index} />
      ))}
    </div>
  );
};

export default ListContent;
