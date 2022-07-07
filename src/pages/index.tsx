import type { NextPage } from 'next'
import PageLayout from '@components/PageLayout'
import Welcome from '@components/Welcome'
import StockMarket from '@components/StockMarket'

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Welcome />
      <StockMarket />
    </PageLayout>
  )
}

export default Home
