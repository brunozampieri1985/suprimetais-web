import styles from './Select.module.css'
import { forwardRef, useState } from 'react'
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'


type OptionsType = {
   value: string
   label: string
}
type SelectProps = {
   name: string
   label: string
   options:OptionsType[]
   onChange: (value: string) => void
   value?: string
}

const Select = forwardRef((props: SelectProps, ref: any) => {
   const { name, label, options, onChange, value } = props
   const [selected, setSelected] = useState(value)
   const [selectedLabel, setSelectedLabel] = useState('')
   const [isOpen, setIsOpen] = useState(false)

   function handleChange(value: string, label: string) {
      setSelected(value)
      setSelectedLabel(label)
      onChange(value)
      setIsOpen(false)
   }

   return (
      <div className={styles.selectContainer}>
         <div            
            ref={ref}
            onClick={() => setIsOpen(!isOpen)}>
            {selectedLabel ? selectedLabel : label} {!isOpen ? <GoTriangleDown /> : <GoTriangleUp />}
         </div>
         <div >
            {isOpen && (
               <>
                  {options.map((option) => (
                     <div
                     className={styles.select}
                        key={option.value}
                        onClick={() => handleChange(option.value, option.label)}>
                        {option.label}
                     </div>
                  ))}
               </>
            )}
         </div>
      </div>
   )
})

Select.displayName = 'Select'

export default Select
