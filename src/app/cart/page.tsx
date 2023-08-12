import { dummyProducts } from '@/logic/utils/dummyProducts'
import formatCurrency from '@/logic/utils/formatCurrency'
import bracelete from '@/public/bracelete.webp'
import Image from 'next/image'
import { Area } from '../components/common/Area'
import { ResponsivePage } from '../components/common/ResponsivePage'

export default function Cart() {
  // const { products } = useContext(CartContext)

  const products = dummyProducts

  return (
    <div>
      <head>
        <title>Carrinho de compras | Epiffania Joias</title>
      </head>
      <ResponsivePage>
        <div className="mt-[4.4rem] pt-10 pb-24">
          <Area>
            <h1 className="text-4xl font-extrabold text-center">
              Carrinho de compras
            </h1>
            <div>
              <h3 className="text-3xl font-bold pt-6 ">
                Revise seu pedido e clique em{' '}
                <span className="text-epiffaniaGreen underline">
                  enviar para vendedora
                </span>
              </h3>
              <p className="text-xl font-medium">
                Que você será direcionado para o WhatsApp com uma lista dos
                produtos, é só nos enviar
              </p>
            </div>

            <ul className="py-10 w-full">
              {products.map(product => (
                <li
                  key={product.code}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-32 h-32">
                      <Image src={bracelete} alt=" " />
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold">{product.title}</h4>
                      <p className="text-xl font-medium">
                        {formatCurrency(product.price)}
                      </p>
                    </div>
                  </div>

                  <button className="p-3 bg-red-400 text-white font-semibold rounded-lg">
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          </Area>
        </div>

        <aside className="w-full min-h-[8rem] fixed bottom-0 pt-[2px] bg-gradient-to-tr from-[#daa520] via-[#f6cb5eed] to-[#daa520]">
          <div className="w-full px-8 py-4 bg-white">
            <div className="flex items-center justify-center gap-6 max-w-[48rem] mx-auto">
              <div className="min-w-[7.4rem] text-center text-2xl font-bold">
                <p>Total</p>
                <p className="font-black text-epiffaniaGreen">R$ 200</p>
              </div>

              <button className="flex-1 py-8 bg-epiffaniaGreen text-2xl text-white font-bold rounded-lg">
                Enviar para Vendedora
              </button>
            </div>
          </div>
        </aside>
      </ResponsivePage>
    </div>
  )
}
