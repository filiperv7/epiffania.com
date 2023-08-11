import bracelete from '@/public/bracelete.webp'
import Link from 'next/link'
import { ButtonAddCart } from '../ButtonAddCart'
import ResponsiveImage from '../ResponsiveImage'

export function Card() {
  return (
    <Link
      href="/product"
      className="w-[30%] max-[600px]:w-[46%] p-4 lg:w-[24%]"
    >
      <ResponsiveImage src={bracelete} alt=" " />
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold text-center">
          Pulseira Elo Suzzi 8MM Dourado Folheado
        </h3>

        <div className="pt-4 pb-3">
          <p className="text-center text-xl text-zinc-500 line-through">
            DE: R$ 59.99
          </p>
          <p className="text-center text-xl font-extrabold text-epiffaniaGreen">
            POR: R$ 47,72
          </p>
        </div>
        <p className="text-center pb-4">3x de 15,90</p>

        <ButtonAddCart className="max-w-[15rem] rounded-3xl" />
      </div>
    </Link>
  )
}
