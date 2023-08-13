interface ButtonAddCartProps {
  className?: string
  text: string
  onClick: () => void
}

export function ButtonAddCart({
  className,
  text,
  onClick
}: ButtonAddCartProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-4 px-6 bg-epiffaniaGreen text-white font-bold ${
        className ?? ''
      }`}
    >
      {text}
    </button>
  )
}
