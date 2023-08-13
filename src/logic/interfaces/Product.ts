interface Product {
  code: string
  name: string
  oldPrice?: number
  price: number
  description?: string
  slug: string
  id: string
  mainPhoto: {
    url: string
  }
  photos?: {
    url: string
  }[]
}

export default Product
