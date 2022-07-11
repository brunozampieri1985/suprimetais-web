import HrLine from '@components/HrLine'
import { useState, forwardRef, useImperativeHandle } from 'react'
import styles from './Modal.module.css'

type ModalProps = {
   children: React.ReactNode
   title?: string
}
export type ModalHandle = {
   open: () => void
   close: () => void
}

const Modal = forwardRef<ModalHandle, ModalProps>((props, ref) => {
   const [isOpenModal, setIsOpenModal] = useState(false)
   useImperativeHandle(ref, () => ({
      open: () => {
         setIsOpenModal(true)
      },
      close: () => {
         setIsOpenModal(false)
      },
   }))
   const { children, title } = props

   function handleClose() {
      setIsOpenModal(false)
   }

   if (!isOpenModal) return null

   return (
      <div className={styles.modal}>
         <div className={styles.content}>
            <div className={styles.header}>
               <div className={styles.title}>{title}</div>
               <div className={styles.close} onClick={handleClose}>
                  <span>&times;</span>
               </div>
            </div>
            <HrLine width={'100%'}/>
            <div className={styles.body}>{children}</div>
         </div>
      </div>
   )
})

Modal.displayName = 'Modal'

export default Modal
