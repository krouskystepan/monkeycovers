import { BASE_PRICE, PRODUCT_PRICES } from '@/config/products'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return formatter.format(price)
}

export const calculateTotalPrice = (
  material: keyof typeof PRODUCT_PRICES.material,
  finish: keyof typeof PRODUCT_PRICES.finish
): number => {
  let totalPrice = BASE_PRICE

  if (PRODUCT_PRICES.material[material] !== undefined) {
    totalPrice += PRODUCT_PRICES.material[material]
  }

  if (PRODUCT_PRICES.finish[finish] !== undefined) {
    totalPrice += PRODUCT_PRICES.finish[finish]
  }

  return totalPrice
}
