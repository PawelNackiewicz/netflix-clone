import React from 'react';
import { Accordion } from '../components/accordion/Accordion';
import styles from '../components/accordion/Accordion.module.scss';
import faqsData from '../fixtures/faqs.json';

export default function FaqContainer() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <div className={styles.wrapper}>
        {faqsData.map((item) => (
          <Accordion key={item.id} question={item.header} answer={item.body} />
        ))}
      </div>
    </div>
  );
}
