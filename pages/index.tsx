import Head from 'next/head'
import Footer from '../components/footer/Footer'
import FaqContainer from '../containers/FaqContainer'
import JumbtornContainer from '../containers/Jumbotorn'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Netflix clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <JumbtornContainer />
      <FaqContainer />
      <Footer />
    </div>
  )
}
