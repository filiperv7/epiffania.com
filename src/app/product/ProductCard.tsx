'use client'

import Product from '@/logic/interfaces/Product'
import formatCurrency from '@/logic/utils/formatCurrency'
import { Carousel } from '@mantine/carousel'
import { Group, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { ButtonAddCart } from '../components/common/ButtonAddCart'
import { ModalWhatsApp } from '../components/common/ModalWhatsApp'
import ResponsiveImage from '../components/common/ResponsiveImage'

export function ProductCard(product: Product) {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <section>
      <div>
        <h1 className="text-3xl font-semibold text-epiffaniaGreen">
          {product.name}
        </h1>
        <p className="text-epiffaniaGreen">Cód. {product.code.toUpperCase()}</p>
      </div>

      <Carousel
        maw="auto"
        mx="auto"
        withIndicators
        controlsOffset="xl"
        loop
        controlSize={42}
      >
        <Carousel.Slide>
          <ResponsiveImage
            src={product.mainPhoto.url}
            alt=" "
            className="h-[26rem] min-[333px]:h-[34rem] min-[440px]:h-[38rem]"
          />
        </Carousel.Slide>
        {product.photos?.map(photo => (
          <Carousel.Slide key={photo.url}>
            <ResponsiveImage
              src={photo.url}
              alt=" "
              className="h-[26rem] min-[333px]:h-[34rem] min-[440px]:h-[38rem]"
            />
          </Carousel.Slide>
        ))}
      </Carousel>

      {/* <p className="text-zinc-500 text-xl">
        DE: <span className="line-through">{formatCurrency(product.oldPrice)}</span>
      </p> */}
      <h2 className="text-5xl font-extrabold text-epiffaniaGreen pt-6 pb-4">
        {formatCurrency(product.price)}{' '}
        <span className="text-xl font-normal">/peça</span>
      </h2>
      <div className="w-[9rem] px-2 rounded-md bg-gradient-to-tr from-[#daa520] from-30% via-[#f6cb5ef1] via-50% to-[#daa520] to-70%">
        <p className="text-xl text-white font-bold text-center">- 10% no PIX</p>
      </div>

      <Modal opened={opened} onClose={close} withCloseButton={false} centered>
        <ModalWhatsApp jewelName="Oii, quero essas joias AGORA!" />
      </Modal>

      <Group position="center">
        <div className="flex justify-center pt-12">
          <ButtonAddCart
            className="text-2xl font-extrabold py-6 w-full rounded-xl"
            text="Fale Conosco"
            onClick={open}
          />
        </div>
      </Group>
      <article className="pt-10">
        <h3 className="text-3xl font-bold">Descrição:</h3>
        <p className="text-xl pt-2">{product.description}</p>
      </article>
    </section>
  )
}
