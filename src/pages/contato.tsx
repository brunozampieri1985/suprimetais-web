import type { NextPage } from 'next'
import PageLayout from '@components/PageLayout'
import Contact from '@components/Contact'

const ContactPage: NextPage = () => {
   return (
      <PageLayout title="Fale Conosco">
         <Contact />
      </PageLayout>
   )
}

export default ContactPage
