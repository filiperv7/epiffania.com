interface ButtonAddCartProps {
  onClick?: () => void
  className?: string
  text: string
}

export function ButtonAddCart({
  onClick,
  className,
  text
}: ButtonAddCartProps) {
  return (
    <button
      // onClick={onClick}
      className={`w-full py-4 px-6 bg-epiffaniaGreen text-white font-bold ${
        className ?? ''
      }`}
    >
      {text}
    </button>
  )
}
