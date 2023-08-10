export interface BenefitProps {
  children: any
  title: string
  description: string
}

export function Benefit({ children, title, description }: BenefitProps) {
  return (
    <div className="flex items-center justify-center gap-4 max-[425px]:flex-col">
      {children}
      <div className="max-w-[18rem]">
        <h3 className="text-lg font-extrabold uppercase max-[425px]:text-center">
          {title}
        </h3>
        <p className="text-epiffaniaGreen font-medium max-[425px]:text-center">
          {description}
        </p>
      </div>
    </div>
  )
}
