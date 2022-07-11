import useDevice from '@hooks/useDevice'
import { useMemo } from 'react'
import FooterDesktop from './FooterDesktop'
import FooterMobile from './FooterMobile'

const Footer: React.FC = () => {
   const products = useMemo(() => {
      return ['Chapas', 'Bobinas', 'Barras', 'Peças Especiais']
   }, [])

   const services = useMemo(() => {
      return ['Corte', 'Usinagem', 'Tratamento Térmico']
   }, [])

   const device = useDevice()
   if (device > 1180)
      return <FooterDesktop products={products} services={services} />
   else return <FooterMobile products={products} services={services} />
}

export default Footer
