import type { NextPage } from 'next'
import PageLayout from '@components/PageLayout'
import Services from '@components/Services'

const ServicesHomePage: NextPage = () => {
  return (
    <PageLayout title='Serviços'>
      <Services />
    </PageLayout>
  )
}

export default ServicesHomePage
