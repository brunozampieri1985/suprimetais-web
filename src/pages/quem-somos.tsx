import type { NextPage } from 'next'
import PageLayout from '@components/PageLayout'
import About from '@components/About'

const AboutUs: NextPage = () => {
  return (
    <PageLayout title='Quem somos'>
      <About />
    </PageLayout>
  )
}

export default AboutUs
