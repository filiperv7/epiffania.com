import lays from '@/public/lays.jpg'
import suellen from '@/public/suellen.jpeg'
import Image from 'next/image'
import { Area } from '../Area'

export function ModalWhatsApp({ jewelName }: { jewelName: string }) {
  return (
    <Area className="p-4">
      <h2 className="text-xl font-extrabold text-center pb-8">
        Escolha com qual representante você prefere:
      </h2>

      <div className="flex items-center gap-6">
        <a
          target="_blank"
          className="flex-1"
          href={`https://api.whatsapp.com/send?phone=5561993758878&text=${jewelName.replace(
            ' ',
            '%20'
          )}`}
        >
          {/* %20 */}
          <Image
            src={lays}
            alt=" "
            className="rounded-full bg-gradient-to-tr from-[#daa520] from-30% via-[#f6cb5ef1] via-50% to-[#daa520] to-70% p-[2px]"
          />
          <p className="text-center pt-2 font-medium">Lays Fernanda</p>
        </a>
        <a
          target="_blank"
          className="flex-1"
          href={`https://api.whatsapp.com/send?phone=5561992370135&text=${jewelName.replace(
            ' ',
            '%20'
          )}`}
        >
          <Image
            src={suellen}
            alt=" "
            className="rounded-full bg-gradient-to-tr from-[#daa520] from-30% via-[#f6cb5ef1] via-50% to-[#daa520] to-70% p-[2px]"
          />
          <p className="text-center pt-2 font-medium">Suellen Marques</p>
        </a>
      </div>
    </Area>
  )
}
