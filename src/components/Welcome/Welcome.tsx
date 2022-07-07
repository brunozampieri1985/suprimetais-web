import styles from './Welcome.module.css'
import Button from '@components/Button'
import ImageSlider from '@components/ImageSlider'
import useDevice from '@hooks/useDevice'

const Welcome: React.FC = () => {

   const device = useDevice()

   return (
      <div className={styles.welcome}>
         <div className={styles.part1}>
            <div className={styles.part1Wrapper}>
               <h1 className={styles.part1Title}>Seu parceiro de AÇO!</h1>
               <p className={styles.part1Subtitle}>
                  Desde 1982 sempre fodendo com os clientes!
               </p>
               <div className={styles.part1Actions}>
                  <Button size={device > 768 ? "lg" : "sm"}>Faça sua cotação!</Button>
                  <Button size={device > 768 ? "lg" : "sm"} variant="ghost">
                     Saiba mais
                  </Button>
               </div>
            </div>
         </div>
         <div className={styles.part2}>
            <ImageSlider />
            {/* <div className={styles.circle} /> */}
         </div>
      </div>
   )
}
export default Welcome
