import bracelete from '@/public/bracelete.webp'
import { Area } from '../components/common/Area'
import { ButtonAddCart } from '../components/common/ButtonAddCart'
import ResponsiveImage from '../components/common/ResponsiveImage'
import { ResponsivePage } from '../components/common/ResponsivePage'

export default function Product() {
  return (
    <div>
      <head>
        <title>Pulseira Elo Suzzi 8MM Dourado Folheado | Epiffania Joias</title>
      </head>
      <ResponsivePage>
        <div className="mt-[4.4rem] py-6">
          <Area>
            <section>
              <div>
                <h1 className="text-3xl font-semibold text-epiffaniaGreen">
                  Pulseira Elo Suzzi 8MM Dourado Folheado
                </h1>
                <p className="text-epiffaniaGreen">Cód. EPFF023</p>
              </div>
              <ResponsiveImage src={bracelete} alt=" " className="h-[26rem]" />

              <p className="text-zinc-500 text-xl">
                DE: <span className="line-through">R$ 59,99</span>
              </p>
              <h3 className="text-5xl font-extrabold text-epiffaniaGreen pt-6 pb-4">
                R$ 47,72 <span className="text-xl font-normal">/peça</span>
              </h3>

              <div className="w-[8rem] px-1  rounded-md bg-gradient-to-tr from-[#daa520] from-30% via-[#f6cb5ef1] via-50% to-[#daa520] to-70%">
                <p className="text-xl text-white font-extrabold text-center">
                  - 5% no PIX
                </p>
              </div>

              <div className="flex justify-center pt-12 py-4">
                <ButtonAddCart className="text-2xl font-extrabold py-6 w-full rounded-xl" />
              </div>
            </section>
          </Area>
        </div>
      </ResponsivePage>
    </div>
  )
}
