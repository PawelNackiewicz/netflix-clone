import { Jumbotron } from '../components/jumbotron/Jumbotron'
import styles from '../components/jumbotron/jumbotron.module.scss'
import jumboData from '../fixtures/jumbo.json'

export default function JumbtornContainer() {
    return (
        <div className={styles.jumbotronContainer}>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} title={item.title} subtitle={item.subTitle} imageAlt={item.alt} imageSrc={item.image}/>
        ))}
      </div>
    )   
}