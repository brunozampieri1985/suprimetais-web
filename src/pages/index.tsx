import type { NextPage } from 'next'
import PageLayout from '@components/PageLayout'
import Welcome from '@components/Welcome'

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Welcome />
    </PageLayout>
  )
}

export default Home
