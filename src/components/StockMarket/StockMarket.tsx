import { useEffect, useState } from 'react'
import styles from './StockMarket.module.css'
import type { StockInfoType } from '@services/stock'
import { useRouter } from 'next/router'

const StockMarket: React.FC = () => {
   const [stockInfo, setStockInfo] = useState<StockInfoType[]>([])
   const [isLoading, setIsLoading] = useState(true)
   const router = useRouter()

   useEffect(() => {
      const getStockMarket = async () => {
         setIsLoading(true)
         const response = await fetch('/api/stock')
         const results = await response.json()
         setStockInfo(results)
         setIsLoading(false)
      }
      getStockMarket()
   }, []) // eslint-disable-line react-hooks/exhaustive-deps

   return (
      <>
         {stockInfo.length > 0 && (
            <>
               <div className={styles.container}>
                  {isLoading ? (
                     <p>Carregando...</p>
                  ) : (
                     <ul
                        className={styles.list}
                        style={{
                           animationDuration: `${stockInfo.length * 3}s`,
                        }}>
                        {stockInfo.map((stock) => {
                           let variation = stock.percentage?.split('')[0]
                           return (
                              <li className={styles.item} key={stock.symbol}>
                                 <a
                                    rel={'noreferrer'}
                                    href={stock.url}
                                    target="_blank">
                                    <div className={styles.itemName}>
                                       {stock.title}
                                       <span className={styles.itemSymbol}>
                                          {' '}
                                          {stock.symbol}
                                       </span>
                                    </div>
                                 </a>
                                 <div className={styles.itemValue}>
                                    {stock.value !== undefined &&
                                    stock.value.length < 3
                                       ? 'Atualizando...'
                                       : `R$ ${stock.value}`}
                                    {stock.value !== undefined &&
                                       stock.value.length > 3 && (
                                          <span
                                             className={
                                                variation === '+'
                                                   ? styles.itemPercentagePlus
                                                   : styles.itemPercentageMinus
                                             }>
                                             {stock.percentage}
                                          </span>
                                       )}
                                 </div>
                              </li>
                           )
                        })}
                     </ul>
                  )}
               </div>
               <p className={styles.infoSource}>Fonte - Infomoney</p>
            </>
         )}
      </>
   )
}

export default StockMarket
