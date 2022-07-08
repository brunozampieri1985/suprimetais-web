import type { NextPage } from 'next'
import PageLayout from '@components/PageLayout'
import Welcome from '@components/Welcome'
import StockMarket from '@components/StockMarket'
import Calculator from '@components/Calculator'

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Welcome />
      <StockMarket />
      <Calculator />
    </PageLayout>
  )
}

export default Home
