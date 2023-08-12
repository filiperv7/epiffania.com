'use client'

import Product from '@/logic/interfaces/Product'
import { dummyProducts } from '@/logic/utils/dummyProducts'
import { ReactNode, useState } from 'react'
import CartContext from './CartContext'

export default function Provider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(dummyProducts)

  const addProduct = () => {
    // const newProduct: Product = {
    //   code: product.code,
    //   title: product.title,
    //   oldPrice: product.oldPrice,
    //   price: product.price
    // }

    // setProducts([...products, newProduct])
    console.log('testaandooooo')
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
