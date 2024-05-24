import { BASE_PRICE, PRODUCT_PRICES } from '@/config/products'
import { type ClassValue, clsx } from 'clsx'
import { Metadata } from 'next'
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

export function constructMetadata({
  title = 'MonkeyCovers',
  description = 'Create custom high-quality phone cases in seconds',
  image = '/thumbnail.png',
  icons = '/favicon.ico',
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    icons,
    metadataBase: new URL('https://monkeycovers.vercel.app/'),
  }
}
