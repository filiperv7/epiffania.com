interface PageProps {
  children: any
  className?: string
}

export function Page({ children, className }: PageProps) {
  return (
    <div
      className={`flex flex-col min-h-screen
        ${className ?? ''}`}
    >
      {children}
    </div>
  )
}
