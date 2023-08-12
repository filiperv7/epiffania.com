'use client'
import { CartProviderType } from '@/logic/interfaces/Provider'
import { createContext } from 'react'

const CartContext = createContext<CartProviderType>({} as CartProviderType)

export default CartContext
