'use client'

import { gql, useQuery } from '@apollo/client'
import { useParams } from 'next/navigation'

import Product from '@/logic/interfaces/Product'
import { Area } from '../../components/common/Area'
import { ResponsivePage } from '../../components/common/ResponsivePage'
import { Vitrine } from '../../components/common/Vitrine'
import { ProductCard } from '../ProductCard'

const GET_JEWEL_QUERY = gql`
  query GetJewelBySlug($slug: String) {
    jewel(where: { slug: $slug }) {
      code
      description
      id
      name
      price
      slug
      mainPhoto {
        url
      }
      photos {
        url
      }
    }
  }
`

interface GetJewelryQueryResponse {
  jewel: Product
}

export default function Product() {
  const params = useParams()

  const { data } = useQuery<GetJewelryQueryResponse>(GET_JEWEL_QUERY, {
    variables: {
      slug: params.slug
    }
  })

  if (!data) {
    return (
      <div className="flex-1">
        <p>CARREGANDO......</p>
      </div>
    )
  }

  const product = data?.jewel

  return (
    <div>
      <head>
        <title>{product.name} | Epiffania Joias</title>
      </head>
      <ResponsivePage>
        <div className="mt-[4.4rem] pt-12 pb-6">
          <Area>
            <div className="max-w-[48rem] min-[481px]:mx-auto">
              <ProductCard
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
            </div>
          </Area>
          <Vitrine title="Outras joias" className="pt-16" />
        </div>
      </ResponsivePage>
    </div>
  )
}
