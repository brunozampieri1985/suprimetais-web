import styles from './Welcome.module.css'
import Button from '@components/Button'
import ImageSlider from '@components/ImageSlider'

const Welcome: React.FC = () => {
   return (
      <div className={styles.welcome}>
         <div className={styles.part1}>
            <div className={styles.part1Wrapper}>
               <h1 className={styles.part1Title}>Seu parceiro de AÇO!</h1>
               <p className={styles.part1Subtitle}>
                  Desde 1982 sempre fodendo com os clientes!
               </p>
               <div className={styles.part1Actions}>
                  <Button size="sm">Faça sua cotação!</Button>
                  <Button size="sm" variant="ghost">
                     Saiba mais
                  </Button>
               </div>
            </div>
         </div>
         <div className={styles.part2}>
            <div className={styles.circle} />
            <ImageSlider/>
         </div>
      </div>
   )
}
export default Welcome
