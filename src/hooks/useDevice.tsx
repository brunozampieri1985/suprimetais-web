import { useState, useEffect } from 'react'

const useDevice = () => {
   const [device, setDevice] = useState<number>(0)

   useEffect(() => {
      const handleResize = () => {
         setDevice(window.innerWidth)
      }
      handleResize()

      window.addEventListener('resize', handleResize)

      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [])

   return device
}


export default useDevice