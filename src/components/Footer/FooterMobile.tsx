import styles from './FooterMobile.module.css'
import Button from '@components/Button'
import { AiOutlineStock, AiFillSetting } from 'react-icons/ai'
import { FaClipboardList } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

type FooterProps = {
   products: string[]
   services: string[]
}

const FooterMobile: React.FC<FooterProps> = ({ products, services }) => {
   return (
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
                     <li
                        key={index}
                        className={styles.cardItemsItem}
                        style={{
                           animationDuration: `${(index + 1) / 5}s`,
                        }}>
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
               <ul className={styles.cardItemsList}>
                  {services.map((service, index) => (
                     <li
                        key={index}
                        className={styles.cardItemsItem}
                        style={{
                           animationDuration: `${
                              (index + products.length + 1) / 5
                           }s`,
                        }}>
                        <AiFillSetting
                           fontSize={12}
                           color={'var(--theme-200)'}
                        />
                        &nbsp;{service}
                     </li>
                  ))}
               </ul>
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
   )
}
export default FooterMobile
