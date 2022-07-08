import styles from './About.module.css'
import PageContainer from '@components/PageContainer'
import { useInView } from 'react-intersection-observer'

const About: React.FC = () => {
   const { inView, ref } = useInView()

   return (
      <PageContainer title="Quem somos">
         <div className={styles.textWrapper} ref={ref}>
            {inView && (
               <>
                  <p className={styles.text}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Similique perferendis eum reiciendis laudantium pariatur,
                     deleniti iusto nobis nemo soluta minus, unde atque optio
                     sunt blanditiis earum dolorum exercitationem. Aliquam,
                     ratione? Minima ex suscipit nam aspernatur eius harum
                     laboriosam illum sunt impedit rem perferendis similique
                     deleniti iusto hic, cumque incidunt nihil id tempore ipsam
                     voluptatum repudiandae soluta. Distinctio cumque saepe
                     itaque. Illum sit earum aliquam tempore corrupti expedita
                     cupiditate aut voluptas voluptates reiciendis! Natus dicta
                     dolor explicabo temporibus delectus ipsa voluptas,
                     voluptates magnam earum vitae tempore illo beatae qui
                     asperiores magni! Incidunt similique eligendi distinctio
                     quae nemo asperiores quaerat assumenda voluptate ipsa,
                     exercitationem inventore esse harum consectetur delectus
                     sint repellat dicta perspiciatis aspernatur eaque illo
                     maiores. Doloribus, reprehenderit! Dignissimos, aperiam
                     qui!
                  </p>
                  <p className={styles.text} style={{animationDelay: '0.5s'}}>
                     Tempore officiis iure commodi magni quis dicta aspernatur
                     laboriosam nemo officia sapiente accusantium perferendis
                     ratione optio ex atque ipsa nobis, sunt alias. Vitae,
                     recusandae. Omnis adipisci nulla, sed repudiandae alias
                     sequi debitis hic facilis corporis vel quod provident
                     placeat nostrum sunt repellendus vitae odio laborum!
                     Officiis harum illum veritatis, quaerat ut assumenda!
                     Doloremque debitis, aut aliquam id fuga cupiditate sit
                     dolor aspernatur impedit ipsam minus veniam quidem porro
                     excepturi blanditiis est laborum architecto eos
                     reprehenderit perferendis incidunt? Iste accusantium
                     laborum quae beatae? Expedita autem facilis tempore
                     voluptatibus ducimus natus ex culpa, dolorum repellat.
                     Optio deleniti, dicta iste id eveniet, cupiditate et
                     reprehenderit vitae doloribus officia doloremque placeat
                     similique eligendi facere, voluptatem voluptate. Reiciendis
                     tempora labore debitis ratione officia delectus ea porro
                     veritatis ut sed. Tempore temporibus voluptatum dolorem ut
                     tenetur eius, nam, ab voluptas amet in cupiditate itaque
                     dolore architecto eligendi nisi?
                  </p>
                  <div className={styles.logo}>S</div>
               </>
            )}
         </div>
      </PageContainer>
   )
}
export default About
