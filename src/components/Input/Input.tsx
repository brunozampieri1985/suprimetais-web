import styles from './Input.module.css'

type InputProps = {
   type: 'number' | 'text'
   placeholder: string
   value?: string
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
   return (
      <div className={styles.inputBox}>
         <input type={type === 'number' ? 'tel' : 'text'} value={value} onChange={onChange} required />
         <span>{placeholder}</span>
      </div>
   )
}
export default Input
