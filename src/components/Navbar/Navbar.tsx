import styles from './Navbar.module.css'
import Container from '@components/Container'
import { useState } from 'react'

const Navbar: React.FC = () => {
   const [isOpen, setIsOpen] = useState<boolean>(false)

   return (
      <nav className={styles.navbar}>
         <Container>
            <div className={styles.content}>
               <div className={styles.contentTop}>
                  <div className={styles.logo}>SupriMetais</div>
                  <div
                     className={`${styles.menuIcon} ${
                        isOpen ? styles.active : ''
                     }`}
                     onClick={() => setIsOpen(!isOpen)}>
                     <span />
                     <span />
                     <span />
                  </div>
               </div>
               {isOpen && (
                  <ul className={styles.menu}>
                     <li className={styles.menuItem}>
                        <a href="" className={styles.menuLink}>
                           Home
                        </a>
                     </li>
                     <li className={styles.menuItem}>
                        <a href="" className={styles.menuLink}>
                           Quem Somos
                        </a>
                     </li>
                    
                     <li className={styles.menuItem}>
                        <a href="" className={styles.menuLink}>
                           Produtos
                        </a>
                     </li>
                     <li className={styles.menuItem}>
                        <a href="" className={styles.menuLink}>
                           Serviços
                        </a>
                     </li>
                     <li className={styles.menuItem}>
                        <a href="" className={styles.menuLink}>
                           Cotação
                        </a>
                     </li>
                     <li className={styles.menuItem}>
                        <a href="" className={styles.menuLink}>
                           Contato
                        </a>
                     </li>
                   
                  </ul>
               )}
            </div>
         </Container>
      </nav>
   )
}

export default Navbar
