import styles from './NavbarMobile.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { AiFillHome, AiOutlineStock, AiFillSetting } from 'react-icons/ai'
import { FaClipboardList } from 'react-icons/fa'
import { MdEmail, MdSupervisedUserCircle } from 'react-icons/md'

const NavbarMobile: React.FC = () => {
   const [isOpen, setIsOpen] = useState<boolean>(false)

   return (
      <nav>
         <div className={styles.navbar}>
            <div className={styles.logo}>SupriMetais</div>
            <div
               className={`${styles.menuIcon} ${isOpen ? styles.active : ''}`}
               onClick={() => setIsOpen(!isOpen)}>
               <span className={styles.menuIconTop} />
               <span className={styles.menuIconMiddle} />
               <span className={styles.menuIconBottom} />
            </div>
         </div>
         <ul className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
            <Link href={'/'} passHref>
               <li
                  className={`${styles.menuItem} ${
                     isOpen ? styles.active : ''
                  }`}>
                  <AiFillHome />
                  &nbsp;Home
               </li>
            </Link>
            <Link href={'/quem-somos'} passHref>
               <li
                  className={`${styles.menuItem} ${
                     isOpen ? styles.active : ''
                  }`}>
                  <MdSupervisedUserCircle />
                  &nbsp;Quem Somos
               </li>
            </Link>
            <Link href={'/'} passHref>
               <li
                  className={`${styles.menuItem} ${
                     isOpen ? styles.active : ''
                  }`}>
                  <AiOutlineStock />
                  &nbsp;Produtos
               </li>
            </Link>
            <Link href={'/'} passHref>
               <li
                  className={`${styles.menuItem} ${
                     isOpen ? styles.active : ''
                  }`}>
                  <AiFillSetting />
                  &nbsp;Serviços
               </li>
            </Link>
            <Link href={'/'} passHref>
               <li
                  className={`${styles.menuItem} ${
                     isOpen ? styles.active : ''
                  }`}>
                  <FaClipboardList />
                  &nbsp;Cotação
               </li>
            </Link>
            <Link href={'/'} passHref>
               <li
                  className={`${styles.menuItem} ${
                     isOpen ? styles.active : ''
                  }`}>
                  <MdEmail />
                  &nbsp;Contato
               </li>
            </Link>
         </ul>
      </nav>
   )
}

export default NavbarMobile
