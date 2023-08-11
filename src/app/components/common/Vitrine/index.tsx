import { Area } from '../Area'
import { Card } from './Card'

export function Vitrine() {
  return (
    <Area className="pb-8">
      <h2 className="text-center text-4xl font-semibold">Destaques</h2>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Area>
  )
}
