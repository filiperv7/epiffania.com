import { CreditCard, Package, Tag } from '@phosphor-icons/react'
import { Benefit } from './Benefit'

export function Benefits() {
  return (
    <div className="py-6 p-4 flex gap-6 flex-wrap items-center justify-center">
      <Benefit
        title="Preços de inauguração"
        description="Aproveite os melhores preços"
      >
        <Tag size={32} color="#113836" weight="bold" />
      </Benefit>

      <Benefit title="Entregue na sua casa" description="Brasília e entrono">
        <Package size={32} color="#113836" weight="bold" />
      </Benefit>

      <Benefit
        title="Pagamento facilitado"
        description="Cartão de crédito, débito ou pix"
      >
        <CreditCard size={32} color="#113836" weight="bold" />
      </Benefit>
    </div>
  )
}
