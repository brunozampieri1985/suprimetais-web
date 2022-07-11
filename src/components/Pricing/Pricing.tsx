import styles from './Pricing.module.css'
import { useRef, useState } from 'react'
import { ICompany, IPricing, IProduct } from '@services/pricing'
import Section from '@components/Section'
import Modal, { ModalHandle } from '@components/Modal'
import Button from '@components/Button'
import { FaClipboardList } from 'react-icons/fa'
import Input from '@components/Input'
import Select from '@components/Select'
import HrLine from '@components/HrLine'

const Pricing: React.FC = () => {
   const [company, setCompany] = useState<ICompany>({
      name: '',
      address: '',
      phone: '',
      email: '',
      cnpj: '',
      person: '',
   })
   const [items, setItems] = useState<IProduct[]>([])

   const modalRef = useRef<ModalHandle>(null)
   const selectRef = useRef<HTMLSelectElement>(null)
   const showModal = () => {
      modalRef.current?.open()
   }

   const AddItem: React.FC = () => {
      const [description, setDescription] = useState('')
      const [quantity, setQuantity] = useState<number | string>(0)
      const [unit, setUnit] = useState('')
      const [errors, setErrors] = useState<string[]>([])

      const handleAddItem = () => {
         setErrors([])
         if (!description) {
            setErrors([...errors, 'É necessário informar a descrição do item'])
            return
         }
         if (!quantity) {
            setErrors([...errors, 'É necessário informar a quantidade'])
            return
         }
         if (!unit) {
            setErrors([...errors, 'É necessário informar a unidade'])
            return
         }
         let newItem: IProduct = {
            description,
            quantity,
            unit,
         }
         setItems([...items, newItem])
         setDescription('')
         setQuantity(0)
         setUnit('')
         modalRef.current?.close()
      }

      return (
         <div className={styles.addItem}>
            <Input
               type="text"
               placeholder="Descrição do produto"
               onChange={(e) => setDescription(e.target.value)}
            />
            <Input
               type="number"
               placeholder="Quantidade"
               onChange={(e) => setQuantity(e.target.value)}
            />
            <Select
               label="Unidade"
               name="unidade"
               options={[
                  { value: 'KG', label: 'KG' },
                  { value: 'UN', label: 'UN' },
                  { value: 'TON', label: 'TON' },
               ]}
               onChange={setUnit}
               value={unit}
            />
            <div className={styles.addItemActions}>
               <Button onClick={handleAddItem}>Salvar</Button>
               <Button variant="ghost">Limpar</Button>
            </div>
            {errors.length > 0 &&
               errors.map((error, index) => (
                  <div className={styles.addItemErrors} key={index}>
                     {error}
                     <span
                        className={styles.addItemErrorsClose}
                        onClick={() => setErrors([])}>
                        &times;
                     </span>
                  </div>
               ))}
         </div>
      )
   }

   return (
      <Section title="Cotação" icon={FaClipboardList}>
         <Modal title="Adicionar item" ref={modalRef}>
            <AddItem />
         </Modal>
         <div className={styles.pricing}>
            <div className={styles.company}>
               <Input
                  type="text"
                  placeholder="Nome da empresa"
                  onChange={(e) =>
                     setCompany((company) => {
                        return {
                           ...company,
                           name: e.target.value,
                        }
                     })
                  }
               />
               <Input
                  type="text"
                  placeholder="Endereço"
                  onChange={(e) =>
                     setCompany((company) => {
                        return {
                           ...company,
                           address: e.target.value,
                        }
                     })
                  }
               />
               <Input
                  type="number"
                  placeholder="Telefone"
                  onChange={(e) =>
                     setCompany((company) => {
                        return {
                           ...company,
                           phone: e.target.value,
                        }
                     })
                  }
               />
               <Input
                  type="text"
                  placeholder="E-mail"
                  onChange={(e) =>
                     setCompany((company) => {
                        return {
                           ...company,
                           email: e.target.value,
                        }
                     })
                  }
               />
               <Input
                  type="text"
                  placeholder="CNPJ"
                  onChange={(e) =>
                     setCompany((company) => {
                        return {
                           ...company,
                           cnpj: e.target.value,
                        }
                     })
                  }
               />
               <Input
                  type="text"
                  placeholder="Nome para Contato"
                  onChange={(e) =>
                     setCompany((company) => {
                        return {
                           ...company,
                           person: e.target.value,
                        }
                     })
                  }
               />
            </div>
            <div className={styles.items}>
               <div className={styles.itemsHeader}>Itens</div>
               {items.map((item, index) => (
                  <div className={styles.item} key={index}>
                     <div className={styles.itemDescription}>
                        {item.description}
                     </div>
                     <div className={styles.itemQuantity}>
                        {item.quantity} {item.unit}
                     </div>
                  </div>
               ))}
            </div>
            <HrLine width='100%' />
            <div className={styles.pricingActions}>
               <Button onClick={showModal}>Adicionar item</Button>
               <Button variant={'ghost'}>Limpar</Button>
            </div>
         </div>
      </Section>
   )
}

export default Pricing
