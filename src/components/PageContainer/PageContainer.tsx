import styles from './PageContainer.module.css'
import { useInView } from 'react-intersection-observer'

type PageContainerProps = {
   children: React.ReactNode
   title: string
}
const PageContainer: React.FC<PageContainerProps> = ({ children, title }) => {
   const { inView, ref } = useInView()

   return (
      <section aria-label={title} className={styles.about}>
         <div className={styles.left}>
            <div className={styles.overlay} />
         </div>
         <div className={styles.container}>
            <div className={styles.titleWrapper} ref={ref}>
               {inView && <h1 className={styles.title}>{title}</h1>}
            </div>
            {children}
         </div>
         <div className={styles.right}>
            <div className={styles.overlay} />
         </div>
      </section>
   )
}
export default PageContainer
