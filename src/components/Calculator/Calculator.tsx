import styles from './Calculator.module.css'
import calculator from '@services/calculator'
import Select from '@components/Select'
import Input from '@components/Input'
import { useRef, useState } from 'react'
import Button from '@components/Button'

const Calculator: React.FC = () => {
   const [perfil, setPerfil] = useState('')
   const [bitola, setBitola] = useState('')
   const [comprimento, setComprimento] = useState('')
   const [largura, setLargura] = useState('')
   const [interno, setInterno] = useState('')

   const selectRef = useRef<HTMLSelectElement>(null)

   const handleCalculate = () => {}

   return (
      <section className={styles.calculator}>
         <div className={styles.container}>
            <h2 className={styles.title}>Calculadora de Peso</h2>
            <div className={styles.select}>
               <Select
                  label="Selecione o Perfil"
                  name="perfil"
                  options={[
                     { value: 'redondo', label: 'Redondos' },
                     { value: 'quadrado', label: 'Quadrados/Chapas' },
                     { value: 'tubo', label: 'Anéis/Tubos' },
                  ]}
                  onChange={setPerfil}
                  value={perfil}
                  ref={selectRef}
               />
            </div>

            <div className={styles.inputs}>
               <Input
                  type={'number'}
                  placeholder="Bitola/Espessura"
                  onChange={(e) => setBitola(e.target.value)}
                  value={bitola}
               />
               <Input
                  type={'number'}
                  placeholder="Comprimento"
                  onChange={(e) => setComprimento(e.target.value)}
               />
               <Input
                  type={'number'}
                  placeholder="Largura"
                  onChange={(e) => setLargura(e.target.value)}
               />
               <Input
                  type={'number'}
                  placeholder="Diâmentro Interno"
                  onChange={(e) => setInterno(e.target.value)}
               />
               <div className={styles.actions}>
                  <Button onClick={handleCalculate}>Calcular</Button>
               </div>
            </div>
         </div>
      </section>
   )
}
export default Calculator
