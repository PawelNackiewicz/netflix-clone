import Head from 'next/head'
import { Jumbotron } from '../components/jumbotron/jumbotron'
import styles from '../styles/Home.module.css'
import jumboData from '../fixtures/jumbo.json'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.jumbotronContainer}>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} title={item.title} subtitle={item.subTitle} imageAlt={item.alt} imageSrc={item.image}/>
        ))}
      </div>
    </div>
  )
}
