import epiffania from '@/public/epiffania.svg'
import menu from '@/public/menu.svg'
import shoppingCart from '@/public/shopping-cart.svg'
import Image from 'next/image'

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  return (
    <div className="fixed z-50 w-full pb-[1px] bg-gradient-to-tr from-[#daa520] via-[#f6cb5eed] to-[#daa520]">
      <div
        className={`flex items-center justify-between p-4 max-h-[4.4rem] border-b text-3xl bg-white ${
          className ?? ''
        }`}
      >
        <Image src={menu} alt="Botão de menu" />
        <Image className="w-80 h-10" src={epiffania} alt="Logo da Epiffania" />
        <Image className="w-12" src={shoppingCart} alt="Carrinho de compras" />
      </div>
    </div>
  )
}
