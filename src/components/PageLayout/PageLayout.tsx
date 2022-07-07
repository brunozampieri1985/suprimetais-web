import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import Head from 'next/head'
import styles from './PageLayout.module.css'

type PageLayoutProps = {
   children: React.ReactNode
   title?: string
   description?: string
}

const PageLayout: React.FC<PageLayoutProps> = ({
   children,
   title,
   description,
}) => {
   return (
      <div className={styles.pageLayout}>
         <Head>
            <title>
               {title
                  ? `SupriMetais | ${title}`
                  : 'SupriMetais - Seu parceiro de aço!'}
            </title>
            <meta
               name="description"
               content={description ?? 'Produtos siderúrgicos'}
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <header>
            <Navbar />
         </header>
         <main className={styles.container}>
            {children}
            <Footer />
         </main>
      </div>
   )
}

export default PageLayout
