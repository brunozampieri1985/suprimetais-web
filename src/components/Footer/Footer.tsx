import Button from '@components/Button'
import styles from './Footer.module.css'
import { AiOutlineStock, AiFillSetting } from 'react-icons/ai'
import { FaClipboardList } from 'react-icons/fa'
import { MdEmail, MdSupervisedUserCircle } from 'react-icons/md'
import { useMemo } from 'react'

const Footer: React.FC = () => {
   const products = useMemo(() => {
      return ['Chapas', 'Bobinas', 'Barras', 'Peças Especiais']
   }, [])

   return (
      <>
         <footer className={styles.footer}>
            <div className={styles.container}>
               <div className={styles.cardLogo}>
                  <div className={styles.logo}>SupriMetais</div>
                  <Button size="sm" variant="secondary">
                     <FaClipboardList />
                     &nbsp;Consulte-nos!
                  </Button>
               </div>
               <div className={styles.card}>
                  <h2 className={styles.cardTitle}>
                     <AiOutlineStock />
                     &nbsp;Produtos
                  </h2>
                  <ul className={styles.cardItemsList}>
                     {products.map((product, index) => (
                        <li key={index} className={styles.cardItemsItem}>
                           <AiOutlineStock
                              fontSize={12}
                              color={'var(--theme-200)'}
                           />
                           &nbsp;{product}
                        </li>
                     ))}
                  </ul>
               </div>
               <div className={styles.card}>
                  <h2 className={styles.cardTitle}>
                     <AiFillSetting />
                     &nbsp;Serviços
                  </h2>
                  <ul className={styles.cardItemsList}></ul>
               </div>
               <div className={styles.card}>
                  <h2 className={styles.cardTitle}>
                     <MdEmail />
                     &nbsp;Contato
                  </h2>
                  <ul className={styles.cardItemsList}></ul>
               </div>
            </div>
         </footer>        
      </>
   )
}
export default Footer
