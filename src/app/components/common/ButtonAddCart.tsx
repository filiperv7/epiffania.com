export function ButtonAddCart({ className }: { className?: string }) {
  return (
    <button
      className={`w-full py-4 px-6 bg-epiffaniaGreen text-white font-bold ${
        className ?? ''
      }`}
    >
      Adicionar ao Carrinho
    </button>
  )
}
