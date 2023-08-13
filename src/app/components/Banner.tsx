// import capaLarge from '@/public/capaLarge.png'
import photoBanner from '@/public/photoBanner.png'
import { Oooh_Baby, Yuji_Syuku } from 'next/font/google'
import Image from 'next/image'
import { Area } from './common/Area'

const oooh_Baby = Oooh_Baby({ subsets: ['latin'], weight: ['400'] })
const yuji_Syuku = Yuji_Syuku({ subsets: ['latin'], weight: ['400'] })

export function Banner() {
  return (
    <div className="mt-[4.4rem] pb-[1px] bg-gradient-to-tr from-[#daa520] via-[#f6cb5eed] to-[#daa520]">
      <div className="bg-[#DBDDB7] w-full h-[400px] max-[444px]min-w-full">
        <Area
          className={`py-4 ${yuji_Syuku.className} text-[#343333] relative h-full min-[675px]:w-[66rem] m-auto`}
        >
          <Image
            src={photoBanner}
            alt=" "
            className="absolute w-[80%] -left-4 top-2 min-[375px]:max-w-[30rem] min-[675px]:top-10"
          />

          <h1
            className={`text-7xl text-7xl leading-normal  ${oooh_Baby.className} absolute right-[20%] bottom-48 min-[374px]:bottom-40 min-[444px]:bottom-96 min-[444px]:right-8 min-[560px]:right-[10%] min-[675px]:right-[16%]`}
          >
            Epiffania
          </h1>

          <div className="absolute w-full text-justify text-[1.6rem] leading-8 bottom-6 pr-6 max-w-[90%] min-[444px]:bottom-10 min-[560px]:max-w-[46%] min-[560px]:right-10 min-[560px]:bottom-40 min-[675px]:text-center">
            <h2 className="leading-6 pb-4">
              Nosso propósito é trazer personalidade, estilo e singularidade
              através do poder que só nossas joias possuem.
            </h2>
            <h3>Se redescubra!</h3>
          </div>
        </Area>
      </div>
    </div>
  )
}
