import React from 'react';
import styles from './jumbotron.module.scss';

export function Jumbotron({ children, index }) {
  return (
    <div className={styles.item}>
    {
    index%2 ? 
      <section className={styles.['jumbotronWrapper--reversed']}>{children}</section> :
      <section className={styles.jumbotronWrapper}>{children}</section>
     }
    </div>
  );
}

Jumbotron.Container = function JumbotronContainer({ children }: any) {
  return <div className={styles.jumbotronContainer}>{children}</div>;
};

Jumbotron.Pane = function JumbotronPane({ children }) {
  return <div className={styles.pane}>{children}</div>;
};

Jumbotron.Title = function JumbotronTitle({ children }) {
  return <h1 className={styles.title}>{children}</h1>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children }) {
  return <h2 className={styles.subtitle}>{children}</h2>;
};

type JumbotronImageProps = {
  readonly src: string;
  readonly alt: string;
};

Jumbotron.Image = function JumbotronImage({ src, alt }: JumbotronImageProps) {
  return <img className={styles.image} src={src} alt={alt} />;
};
