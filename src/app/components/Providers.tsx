'use client'

import Provider from '@/app/context/Provider'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return <Provider>{children}</Provider>
}
