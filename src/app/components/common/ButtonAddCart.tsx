interface ButtonAddCartProps {
  className?: string
  text: string
}

export function ButtonAddCart({ className, text }: ButtonAddCartProps) {
  return (
    <button
      className={`w-full py-4 px-6 bg-epiffaniaGreen text-white font-bold ${
        className ?? ''
      }`}
    >
      {text}
    </button>
  )
}
