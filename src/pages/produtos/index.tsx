import type { NextPage } from 'next'
import PageLayout from '@components/PageLayout'
import Products from '@components/Products'

const ProductsHomePage: NextPage = () => {
  return (
    <PageLayout title='Produtos'>
      <Products />
    </PageLayout>
  )
}

export default ProductsHomePage
