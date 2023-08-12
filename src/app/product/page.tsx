'use client'

import { dummyProducts } from '@/logic/utils/dummyProducts'
import formatCurrency from '@/logic/utils/formatCurrency'
import bracelete from '@/public/bracelete.webp'
import { Carousel } from '@mantine/carousel'
import { Area } from '../components/common/Area'
import { ButtonAddCart } from '../components/common/ButtonAddCart'
import ResponsiveImage from '../components/common/ResponsiveImage'
import { ResponsivePage } from '../components/common/ResponsivePage'

export default function Product() {
  const product = dummyProducts[0]
  return (
    <div>
      <head>
        <title>{product.title} | Epiffania Joias</title>
      </head>
      <ResponsivePage className="max-w-[48rem] min-[481px]:mx-auto">
        <div className="mt-[4.4rem] py-6">
          <Area>
            <section>
              <div>
                <h1 className="text-3xl font-semibold text-epiffaniaGreen">
                  {product.title}
                </h1>
                <p className="text-epiffaniaGreen">
                  Cód. {product.code.toUpperCase()}
                </p>
              </div>

              <Carousel maw="auto" mx="auto" withIndicators height={400}>
                <Carousel.Slide>
                  <ResponsiveImage
                    src={bracelete}
                    alt=" "
                    className="h-[26rem]"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <ResponsiveImage
                    src={bracelete}
                    alt=" "
                    className="h-[26rem]"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <ResponsiveImage
                    src={bracelete}
                    alt=" "
                    className="h-[26rem]"
                  />
                </Carousel.Slide>
              </Carousel>

              <p className="text-zinc-500 text-xl">
                DE:{' '}
                <span className="line-through">
                  {formatCurrency(product.oldPrice)}
                </span>
              </p>
              <h2 className="text-5xl font-extrabold text-epiffaniaGreen pt-6 pb-4">
                {formatCurrency(product.price)}{' '}
                <span className="text-xl font-normal">/peça</span>
              </h2>
              <div className="w-[8rem] px-1  rounded-md bg-gradient-to-tr from-[#daa520] from-30% via-[#f6cb5ef1] via-50% to-[#daa520] to-70%">
                <p className="text-xl text-white font-extrabold text-center">
                  - 5% no PIX
                </p>
              </div>
              <div className="flex justify-center pt-12">
                <ButtonAddCart
                  className="text-2xl font-extrabold py-6 w-full rounded-xl"
                  text="Adicionar ao Carrinho"
                />
              </div>
              <article className="pt-8">
                <h3 className="text-3xl font-bold">Descrição:</h3>
                <p className="text-xl pt-2">{product.description}</p>
              </article>
            </section>
          </Area>
        </div>
      </ResponsivePage>
    </div>
  )
}
