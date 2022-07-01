import styles from './Navbar.module.css'
import Container from '@components/Container'
import { useState } from 'react'

const Navbar: React.FC = () => {
   const [isOpen, setIsOpen] = useState<boolean>(false)

   return (
      <nav className={styles.navbar}>
         <Container>
            <div className={styles.content}>
               <div className={styles.logo}>SupriMetais</div>
               <div
                  className={`${styles.menuIcon} ${
                     isOpen ? styles.active : ''
                  }`}
                  onClick={() => setIsOpen(!isOpen)}
                  >
                  <span />
                  <span />
                  <span />
               </div>
               <ul className={styles.menu}>
                  <li className={styles.menuItem}>Home</li>
                  <li className={styles.menuItem}>Quem Somos</li>
                  <li className={styles.menuItem}>Serviços</li>
                  <li className={styles.menuItem}>Produtos</li>
                  <li className={styles.menuItem}>Cotações</li>
                  <li className={styles.menuItem}>Contato</li>
               </ul>
            </div>
         </Container>
      </nav>
   )
}

export default Navbar
