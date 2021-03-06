/* eslint-disable @next/next/no-html-link-for-pages */
import styles from './NavbarDesktop.module.css'
import Link from 'next/link'
import { AiFillHome, AiOutlineStock, AiFillSetting } from 'react-icons/ai'
import { FaClipboardList } from 'react-icons/fa'
import { MdEmail, MdSupervisedUserCircle } from 'react-icons/md'

const NavbarDesktop: React.FC = () => {
   return (
      <nav className={styles.navbar}>
         <div className={styles.content}>
            <div className={styles.logo}>SupriMetais</div>
            <ul className={styles.menu}>
               <a href="/">
                  <li className={styles.menuItem}>
                     <div className={styles.menuItemIcon}>
                        <AiFillHome />
                     </div>
                     <div className={styles.menuItemText}>Home</div>
                  </li>
               </a>
               <a href="/quem-somos">
                  <li className={styles.menuItem}>
                     <div className={styles.menuItemIcon}>
                        <MdSupervisedUserCircle />
                     </div>
                     <div className={styles.menuItemText}>Quem somos</div>
                  </li>
               </a>
               <a href="/produtos">
                  <li className={styles.menuItem}>
                     <div className={styles.menuItemIcon}>
                        <AiOutlineStock />
                     </div>
                     <div className={styles.menuItemText}>Produtos</div>
                  </li>
               </a>
               <a href="/servicos">
                  <li className={styles.menuItem}>
                     <div className={styles.menuItemIcon}>
                        <AiFillSetting />
                     </div>
                     <div className={styles.menuItemText}>Serviços</div>
                  </li>
               </a>
               <a href="/cotacao">
                  <li className={styles.menuItem}>
                     <div className={styles.menuItemIcon}>
                        <FaClipboardList />
                     </div>
                     <div className={styles.menuItemText}>Cotações</div>
                  </li>
               </a>
               <a href="/contato">
               <li className={styles.menuItem}>
                  <div className={styles.menuItemIcon}>
                     <MdEmail />
                  </div>
                  <div className={styles.menuItemText}>Contato</div>
               </li>
               </a>
            </ul>
         </div>
      </nav>
   )
}

export default NavbarDesktop
