import { Area } from '../components/common/Area'
import { ResponsivePage } from '../components/common/ResponsivePage'

export default function Cart() {
  return (
    <div>
      <head>
        <title>Carrinho de compras | Epiffania Joias</title>
      </head>
      <ResponsivePage>
        <div className="mt-[4.4rem] py-6">
          <Area>
            <p>Aqui é será o carrinho</p>
          </Area>
        </div>
      </ResponsivePage>
    </div>
  )
}
