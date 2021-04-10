import React from 'react';
import styles from './jumbotron.module.scss';

type JumbotonProps = {
  readonly title: string;
  readonly subtitle: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
};

export function Jumbotron({ title, subtitle, imageAlt, imageSrc }: JumbotonProps) {
  return (
    <div className={styles.item}>
      <section className={styles.jumbotronWrapper}>
        <div className={styles.pane}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
        </div>
        <div className={styles.pane}>
          <img className={styles.image} src={imageSrc} alt={imageAlt} />
        </div>
      </section>
    </div>
  );
}
