'use client'

import { Banner } from '@/components/Banner'
import { Benefits } from '@/components/Benefits'
import { Page } from '@/components/common/Page'

export default function Home() {
  return (
    <Page>
      <Banner />
      <Benefits />
    </Page>
  )
}
