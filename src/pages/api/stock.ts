// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getCambio, getStockMarket } from '@services/stock'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
   const results = await getStockMarket()
   const cambio = await getCambio()
   res.status(200).json([...results, ...cambio])
}

export default handler