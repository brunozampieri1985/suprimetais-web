import styles from './Pricing.module.css'
import { useRef, useState } from 'react'
import { ICompany, IPricing, IProduct } from '@services/pricing'
import Section from '@components/Section'
import Modal, { ModalHandle } from '@components/Modal'
import Button from '@components/Button'
import { FaClipboardList } from 'react-icons/fa'
import { BsFillTrashFill } from 'react-icons/bs'
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
            id: items.length + 1,
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

   const PricingItem: React.FC<{ pItem: IProduct }> = ({ pItem }) => {
      return (
         <div className={styles.pricingItem}>
            <div className={styles.pricingItemDescription}>
               {pItem.description}
            </div>
            <div className={styles.pricingItemQuantity}>
               {pItem.quantity} {pItem.unit}
            </div>
            <div className={styles.removeItem}>
               <BsFillTrashFill
                  onClick={() =>
                     setItems(items.filter((i) => i.id !== pItem.id))
                  }
               />
            </div>
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
            <div className={styles.pricingActions}>
               <Button variant={'secondary'} size={'sm'}>
                  Salvar Dados
               </Button>
               <Button
                  variant={'ghost'}
                  size={'sm'}
                  onClick={() => setItems([])}>
                  Limpar
               </Button>
            </div>
            <div className={styles.items}>
               <div className={styles.itemsHeader}>
                  Itens: {items.length > 0 ? `${items.length}` : null}
               </div>
               <HrLine width="100%" />
               {items.map((item, index) => (
                  <>
                  <PricingItem key={index} pItem={item} />
                  <HrLine width="100%" />
                  </>
               ))}
            </div>
            <div className={styles.pricingActions}>
               <Button variant={'secondary'} size={'sm'} onClick={() => modalRef.current?.open()}>
                  Adicionar item
               </Button>
               <Button
                  variant={'ghost'}
                  size={'sm'}
                  onClick={() => setItems([])}>
                  Limpar
               </Button>
            </div>
         </div>
      </Section>
   )
}

export default Pricing
