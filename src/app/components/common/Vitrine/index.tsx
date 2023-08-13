'use client'

import Product from '@/logic/interfaces/Product'
import { gql, useQuery } from '@apollo/client'
import { Area } from '../Area'
import { Card } from './Card'

const GET_JEWELRY_QUERY = gql`
  query {
    jewelry(first: 50) {
      code
      description
      id
      name
      price
      slug
      mainPhoto {
        url
      }
    }
  }
`

interface GetJewelryQueryResponse {
  jewelry: Product[]
}

export function Vitrine({
  title,
  className
}: {
  title: string
  className?: string
}) {
  const { data } = useQuery<GetJewelryQueryResponse>(GET_JEWELRY_QUERY)

  if (!data) {
    return (
      <div className="flex-1 h-full flex items-center justify-center">
        <p className="text-center text-4xl font-bold gradient">CARREGANDO...</p>
      </div>
    )
  }

  const products = data.jewelry

  return (
    <Area className={`pb-8 ${className ?? ''}`}>
      <h2 className="text-center text-4xl font-bold pb-6">{title}</h2>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {products.map(product => (
          <Card
            key={product.id}
            id={product.id}
            code={product.code}
            name={product.name}
            description={product.description}
            oldPrice={product.oldPrice}
            price={product.price}
            slug={product.slug}
            mainPhoto={product.mainPhoto}
            photos={product.photos}
          />
        ))}
      </div>
    </Area>
  )
}
