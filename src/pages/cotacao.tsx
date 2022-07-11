import type { NextPage } from 'next'
import PageLayout from '@components/PageLayout'
import Pricing from '@components/Pricing'

const PricingPage: NextPage = () => {
  return (
    <PageLayout title='Cotação'>
      <Pricing />
    </PageLayout>
  )
}

export default PricingPage
