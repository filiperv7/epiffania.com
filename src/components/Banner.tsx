import capa from '@/public/capa.jpg'
import { Quando } from 'next/font/google'
import Image from 'next/image'

const quando = Quando({ subsets: ['latin'], weight: ['400'] })

export function Banner() {
  return (
    <div className="mt-[4.4rem] pb-[1px] bg-gradient-to-tr from-[#daa520] via-[#f6cb5eed] to-[#daa520]">
      <div className="relative">
        <Image
          src={capa}
          alt="Capa do site"
          className="w-[100%] h-[300px] object-cover"
        />
        <div className="absolute bottom-0 p-4">
          <h2 className={`gradient text-3xl leading-6 ${quando.className}`}>
            13/08
          </h2>
          <h1
            className={`gradient text-7xl max-[317px]:text-6xl max-[317px]:leading-relaxed leading-normal ${quando.className}`}
          >
            Inauguração
          </h1>
        </div>
      </div>
    </div>
  )
}
