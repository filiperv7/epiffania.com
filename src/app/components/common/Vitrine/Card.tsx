import Product from '@/logic/interfaces/Product'
import formatCurrency from '@/logic/utils/formatCurrency'
import { Group, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import { ButtonAddCart } from '../ButtonAddCart'
import { ModalWhatsApp } from '../ModalWhatsApp'
import ResponsiveImage from '../ResponsiveImage'

export function Card(product: Product) {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <div className="w-[30%] max-[600px]:w-[46%] p-4 lg:w-[24%]">
      <div className="flex flex-col items-center">
        <Link
          href={`/product/${product.slug}`}
          className="text-center relative flex flex-col items-center"
        >
          <ResponsiveImage src={product.mainPhoto?.url} alt=" " />
          <h3 className="text-xl font-bold pt-2">{product.name}</h3>

          <div className="pt-4 pb-1">
            {/* <p className="text-center text-xl text-zinc-500 line-through">
            DE: {formatCurrency(oldPrice)}
          </p> */}
            <p className=" text-2xl font-extrabold text-epiffaniaGreen">
              {formatCurrency(product.price)}
            </p>
          </div>
          <p className=" pb-4">3x de {formatCurrency(product.price / 3)}</p>
        </Link>

        <Modal opened={opened} onClose={close} withCloseButton={false} centered>
          <ModalWhatsApp jewelName="" />
        </Modal>

        <Group position="center">
          <ButtonAddCart
            className="max-w-[15rem] rounded-3xl"
            text="Fale Conosco"
            onClick={open}
          />
        </Group>
      </div>
    </div>
  )
}
