import Head from 'next/head'
import { Jumbotron } from '../components/jumbotron/jumbotron'
import styles from '../styles/Home.module.css'
import jumboData from '../fixtures/jumbo.json'
import image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Jumbotron.Container>
        {jumboData.map((item, index) => (
          <Jumbotron key={item.id} index={index}>
            <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.Pane>
            </Jumbotron>
        ))}}
      </Jumbotron.Container>
    </div>
  )
}
