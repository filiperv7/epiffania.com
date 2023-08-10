import { Banner } from '@/app/components/Banner'
import { Benefits } from '@/app/components/Benefits'
import { Page } from '@/app/components/common/Page'
import { Vitrine } from './components/common/Vitrine'

export default function Home() {
  return (
    <Page>
      <Banner />
      <Benefits />
      <Vitrine />
    </Page>
  )
}
