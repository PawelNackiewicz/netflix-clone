import React, { useState } from 'react';
import styles from './accordion.module.scss';

type AccordionProps = {
  readonly question: string;
  readonly answer: string;
};

export function Accordion({ question, answer }: AccordionProps) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <div className={styles.item}>
      <div className={styles.question} onClick={() => setToggleShow(!toggleShow)}>
        {question}
        {toggleShow ? (
          <img src="/images/icons/close-slim.png" alt="Close" />
        ) : (
          <img src="/images/icons/add.png" alt="Open" />
        )}
      </div>
      <div className={styles.answer}>
        <div className={toggleShow ? styles.['answer-open'] : styles.['answer-closed']}>
          <span>{answer}</span>
        </div>
      </div>
    </div>
  );
}
