import { Banner } from '@/app/components/Banner'
import { Benefits } from '@/app/components/Benefits'
import { ResponsivePage } from '@/app/components/common/ResponsivePage'
import { Vitrine } from './components/common/Vitrine'

export default function Home() {
  return (
    <ResponsivePage>
      <Banner />
      <Benefits />
      <Vitrine />
    </ResponsivePage>
  )
}
