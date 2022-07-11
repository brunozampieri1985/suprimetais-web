import styles from './Section.module.css'
import { useInView } from 'react-intersection-observer'
import HrLine from '@components/HrLine'
import { createElement } from 'react'
import { IconType } from 'react-icons'

type SectionProps = {
   children: React.ReactNode
   title: string
   icon?: IconType
}
const Section: React.FC<SectionProps> = ({
   children,
   title,
   icon,
}) => {
   const { inView, ref } = useInView()

   return (
      <section aria-label={title} className={styles.about}>
         <div className={styles.left}>
            <div className={styles.overlay} />
         </div>
         <div className={styles.container}>
            <div className={styles.titleWrapper} ref={ref}>
               {inView && (
                  <>
                     <h1 className={styles.title}>
                        {icon ? createElement(icon) : null}
                        &nbsp;
                        {title}
                     </h1>
                  </>
               )}
            </div>
            <HrLine />
            {children}
         </div>
         <div className={styles.right}>
            <div className={styles.overlay} />
         </div>
      </section>
   )
}
export default Section
