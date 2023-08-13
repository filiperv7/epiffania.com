import capa from '@/public/capa.jpg'
import { Quando } from 'next/font/google'
import Image from 'next/image'
import { Area } from './common/Area'

const quando = Quando({ subsets: ['latin'], weight: ['400'] })

export function Banner() {
  return (
    <div className="mt-[4.4rem] pb-[1px] bg-gradient-to-tr from-[#daa520] via-[#f6cb5eed] to-[#daa520]">
      <div className="relative">
        <Image
          src={capa}
          alt="Capa do site"
          className="w-[100%] h-[400px] object-cover object-top object-[20%]"
        />
        <Area className={`absolute bottom-0 py-4 ${quando.className}`}>
          <h2 className="gradient text-3xl leading-6 drop-shadow-epiff">
            13/08
          </h2>
          <h1 className="gradient text-7xl max-[317px]:text-6xl max-[317px]:leading-relaxed leading-normal drop-shadow-epiff max-[334px]:text-[4rem]">
            Inauguração
          </h1>
        </Area>
      </div>
    </div>
  )
}
