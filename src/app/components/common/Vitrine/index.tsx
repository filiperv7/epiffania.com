import Product from '@/logic/interfaces/Product'
import { dummyProducts } from '@/logic/utils/dummyProducts'
import { Area } from '../Area'
import { Card } from './Card'

export function Vitrine() {
  // const { addProduct } = useContext(CartContext)

  const products = dummyProducts

  const test = () => {
    console.log('teste')
  }

  const product: Product = {
    code: 'epff098',
    title: 'Só um teesteee',
    oldPrice: 200,
    price: 300
  }

  return (
    <Area className="pb-8">
      <h2 className="text-center text-4xl font-semibold">Destaques</h2>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {products.map(product => (
          <Card
            key={product.code}
            code={product.code}
            title={product.title}
            oldPrice={product.oldPrice}
            price={product.price}
            addProduct={test}
          />
        ))}
      </div>
    </Area>
  )
}
