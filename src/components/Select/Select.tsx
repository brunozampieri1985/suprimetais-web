import { forwardRef, useState } from 'react'
import styles from './Select.module.css'

type SelectProps = {
   name: string
   label: string
   options: Array<{ value: string; label: string }>
   onChange: (value: string) => void
   value?: string
}

// eslint-disable-next-line react/display-name
const Select = forwardRef((props: SelectProps, ref: any) => {
   const { name, label, options, onChange, value } = props

   const [selected, setSelected] = useState(value)

   function handleChange(value: string) {      
      setSelected(value)
      onChange(value)
   }

   return (
      <div className={styles.selectContainer}>
         <div className={styles.selectLabel} ref={ref}>{label}</div>
         <div className={styles.select}>
            {options.map((option) => (
               <div key={option.value} onClick={() => handleChange(option.value)}>{option.label}</div>
            ))}
         </div>


        {/*  <select
            name={name}
            id={name}
            value={selected}
            onChange={handleChange}
            ref={ref}>
            <option value="">{label}</option>
            {options.map((option) => (
               <option key={option.value} value={option.value}>
                  {option.label}
               </option>
            ))}
         </select> */}
      </div>
   )
})

export default Select
