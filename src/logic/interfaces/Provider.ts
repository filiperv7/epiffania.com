import Product from './Product'

export type CartProviderType = {
  products: Product[]
  addProduct: () => void
}
