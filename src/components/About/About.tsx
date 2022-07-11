import styles from './About.module.css'
import Section from '@components/Section'
import { MdSupervisedUserCircle } from 'react-icons/md'
import { useInView } from 'react-intersection-observer'

const About: React.FC = () => {
   const { inView, ref } = useInView()

   return (
      <Section title="Quem Somos" icon={MdSupervisedUserCircle}>
         <div className={styles.textWrapper} ref={ref}>
            {inView && (
               <>
                  <p className={styles.text}>
                     A SupriMetais nasceu da expertise acumulada em quase 50
                     anos de atividades ligadas à aquisição, beneficiamento e
                     comercialização de produtos siderúrgicos. Nesta longa
                     jornada, tivemos o privilégio de encarar os mais complexos
                     desafios, dos quais sempre resultaram em grande
                     aprendizagem, possiblitando firmar grandes parcerias em
                     todos os segmentos do mercado.
                  </p>
                  <p className={styles.text} style={{ animationDelay: '0.5s' }}>
                     Somos focados na busca por soluções rápidas e
                     eficazes, proporcionando economia de tempo, apresentando à
                     seus clientes as melhores opções de fornecimento
                     disponíveis no mercado. Graças à nossas parceriais em todo
                     o segmento, apoiadas pela garantia da qualidade conforme
                     ISO 9001:2015, podemos apresentar ótimas oportunidades de
                     negócios com nossas representadas.
                  </p>
                  <p className={styles.text} style={{ animationDelay: '1s' }}>
                     Estamos aptos à apresentar soluções saudáveis para as mais diversas situações.
                  </p>
                  <p className={styles.text} style={{ animationDelay: '1.5s' }}>
                     Confie à nós suas dificuldades.
                  </p>
               </>
            )}
         </div>
      </Section>
   )
}
export default About
