import { useEffect, useState } from 'react'
import styles from './StockMarket.module.css'
import type { StockInfoType } from '@services/stock'
import { useInView } from 'react-intersection-observer'
import { useRouter } from 'next/router'

const StockMarket: React.FC = () => {
   const [stockInfo, setStockInfo] = useState<StockInfoType[]>([])
   const { ref, inView } = useInView()
   const router = useRouter()

   useEffect(() => {
      const getStockMarket = async () => {
         const response = await fetch('/api/stock')
         const results = await response.json()
         setStockInfo(results)
      }
      getStockMarket()
   }, []) // eslint-disable-line react-hooks/exhaustive-deps

   return (
      <>
         {stockInfo.length > 0 && (
            <>
               <div className={styles.container} ref={ref}>
                  <ul
                     className={styles.list}
                     style={{
                        animationDuration: `${stockInfo.length * 3}s`,
                     }}>
                     {stockInfo.map((stock) => {
                        let variation = stock.percentage?.split('')[0]
                        return (
                           <a
                              key={stock.symbol}
                              rel={'noreferrer'}
                              href={stock.url}
                              target="_blank">
                              <li className={styles.item}>
                                 <div className={styles.itemName}>
                                    {stock.title}
                                    <span className={styles.itemSymbol}>
                                       {' '}
                                       {stock.symbol}
                                    </span>
                                 </div>
                                 <div className={styles.itemValue}>
                                    R$ {stock.value}
                                    <span
                                       className={
                                          variation === '+'
                                             ? styles.itemPercentagePlus
                                             : styles.itemPercentageMinus
                                       }>
                                       {stock.percentage}
                                    </span>
                                 </div>
                              </li>
                           </a>
                        )
                     })}
                  </ul>
               </div>
               <p className={styles.infoSource}>Fonte - Infomoney</p>
            </>
         )}
      </>
   )
}

export default StockMarket
