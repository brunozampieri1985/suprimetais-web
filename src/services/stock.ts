import xRay from 'x-ray'

export type StockInfoType = {
   symbol: string
   title: string
   value?: string
   percentage?: string
   url?: string
}

export const stocks: StockInfoType[] = [
   {
      symbol: 'csn-csna3',
      title: 'CSN',
      value: '',
      percentage: '',
   },
   {
      symbol: 'gerdau-ggbr4',
      title: 'GERDAU',
      value: '',
      percentage: '',
   },
   {
      symbol: 'usiminas-usim5',
      title: 'USIMINAS',
      value: '',
      percentage: '',
   },
   {
      symbol: 'vale-vale3',
      title: 'VALE',
      value: '',
      percentage: '',
   },
   {
      symbol: 'arcelor-armt34',
      title: 'Arcelor Mittal',
      value: '',
      percentage: '',
   },
]

export const getStockMarket = async () => {
   const x = xRay()
   let results: StockInfoType[] = []
   for (let i = 0; i < stocks.length; i++) {
      try {
         let response = await x(
            `https://www.infomoney.com.br/cotacoes/b3/acao/${stocks[i].symbol}`,
            {
               value: 'div.value',
               percentage: 'div.percentage',
            }
         )
         let { value, percentage } = response
         let formattedValue = value.trim().split('\n')[0]
         let formattedPercentage = percentage.trim().split('\n')[0].trim()
         results.push({
            symbol: stocks[i].symbol,
            title: stocks[i].title,
            value: formattedValue,
            percentage: formattedPercentage,
            url: `https://www.infomoney.com.br/cotacoes/b3/acao/${stocks[i].symbol}`
         })
      } catch (error) {
         results.push({
            symbol: stocks[i].symbol,
            title: stocks[i].title,
            value: '',
            percentage: '',
            url: ''
         })
      }
   }
   return results
}

export const getCambio = async () => {
   const x = xRay()
   let response = await x('https://www.infomoney.com.br/ferramentas/cambio', {
      value: 'table.default-table',
   })

   let { value } = response

   let arr = value
      .trim()
      .split('\n')
      .map((item: string) => {
         let newItem = item.trim()
         if (newItem !== '' && item !== undefined) {
            return newItem
         }
      })
      .filter((item: string) => {
         return item !== undefined
      })

   console.log(arr)

   let indexOfUSD = arr.indexOf('Dólar Comercial')
   let indexofEuro = arr.indexOf('Euro')

   let reply = [
      {
         symbol: 'USD',
         title: 'Dólar Comercial',
         value: arr[indexOfUSD + 2],
         percentage: `${arr[indexOfUSD + 3].slice(0, 5)}%`,
         url: 'https://www.infomoney.com.br/ferramentas/cambio'
      },
      {
         symbol: 'EUR',
         title: 'Euro',
         value: arr[indexofEuro + 2],
         percentage: `${arr[indexofEuro + 3].slice(0, 5)}%`,
         url: 'https://www.infomoney.com.br/ferramentas/cambio'
      },
   ]

   return reply
}
