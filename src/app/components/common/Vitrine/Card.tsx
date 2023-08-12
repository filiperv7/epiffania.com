import Product from '@/logic/interfaces/Product'
import formatCurrency from '@/logic/utils/formatCurrency'
import bracelete from '@/public/bracelete.webp'
import Link from 'next/link'
import { ButtonAddCart } from '../ButtonAddCart'
import ResponsiveImage from '../ResponsiveImage'

interface CardProps extends Product {
  addProduct: () => void
}

export function Card({ code, title, oldPrice, price, addProduct }: CardProps) {
  return (
    <Link
      href="/product"
      className="w-[30%] max-[600px]:w-[46%] p-4 lg:w-[24%]"
    >
      <ResponsiveImage src={bracelete} alt=" " />
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold text-center">{title}</h3>

        <div className="pt-4 pb-3">
          <p className="text-center text-xl text-zinc-500 line-through">
            DE: {formatCurrency(oldPrice)}
          </p>
          <p className="text-center text-xl font-extrabold text-epiffaniaGreen">
            POR: {formatCurrency(price)}
          </p>
        </div>
        <p className="text-center pb-4">3x de 15,90</p>

        <ButtonAddCart
          onClick={addProduct}
          className="max-w-[15rem] rounded-3xl"
          text="Adicionar ao Carrinho"
        />
      </div>
    </Link>
  )
}
