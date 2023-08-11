import epiffania from '@/public/epiffania.svg'
import menu from '@/public/menu.svg'
import shoppingCart from '@/public/shopping-cart.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Area } from './common/Area'

export function Header() {
  return (
    <div className="fixed z-50 w-full pb-[1px] bg-gradient-to-tr from-[#daa520] via-[#f6cb5eed] to-[#daa520]">
      <Area className="max-h-[4.4rem] py-4 bg-white">
        <div className="flex items-center justify-between">
          <Image src={menu} alt="Botão de menu" />
          <Link href={'/'}>
            <Image
              className="w-80 h-10"
              src={epiffania}
              alt="Logo da Epiffania"
            />
          </Link>
          <Link href={'/cart'}>
            <Image
              className="w-12 select-none"
              src={shoppingCart}
              alt="Carrinho de compras"
            />
          </Link>
        </div>
      </Area>
    </div>
  )
}
