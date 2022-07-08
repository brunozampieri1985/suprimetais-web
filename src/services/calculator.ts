
const calculator = {
   redondo: (bitola: number, comprimento: number): number => {
      return bitola * bitola * 0.006165 * (comprimento / 1000)
   },
   quadrado: (bitola: number, comprimento: number, largura: number): number => {
      return bitola * largura * 0.00785 * (comprimento / 1000)
   },
    tubo: (bitola: number, comprimento: number, largura: number, interno: number): number => {
      return (
         calculator.redondo(bitola, comprimento) -
         calculator.redondo(interno, comprimento)
      )
   }
}


export default calculator