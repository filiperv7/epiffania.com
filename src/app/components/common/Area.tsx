import { ReactNode } from 'react'

interface AreaProps {
  children: ReactNode
  className?: string
}

export function Area({ children, className }: AreaProps) {
  return (
    <div
      className={`flex justify-center w-full
    ${className ?? ''}`}
    >
      <div className="px-6 w-full xl:px-0 xl:w-[1200px]">{children}</div>
    </div>
  )
}
