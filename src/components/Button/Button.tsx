import { ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonProps = {
   children: ReactNode
   variant?: 'primary' | 'secondary' | 'ghost'
   size?: 'sm' | 'md' | 'lg'
   onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
   size,
   variant,
   onClick,
   children,
}) => {
   return (
      <button
         className={`${styles.button} ${styles[variant ?? 'primary']} ${styles[size ?? 'md']}`}
         onClick={onClick}>
         {children}
      </button>
   )
}

export default Button
