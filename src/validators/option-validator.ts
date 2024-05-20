// bg-zinc-950 border-zinc-950
// bg-rose-950 border-rose-950
// bg-blue-950 border-blue-950
// bg-purple-950 border-purple-950
// bg-green-950 border-green-950

import { PRODUCT_PRICES } from '@/config/products'

export const COLORS = [
  { label: 'Black', value: 'black', tw: 'zinc-950' },
  { label: 'Rose', value: 'rose', tw: 'rose-950' },
  { label: 'Blue', value: 'blue', tw: 'blue-950' },
  { label: 'Purple', value: 'purple', tw: 'purple-950' },
  { label: 'Green', value: 'green', tw: 'green-950' },
] as const

export const MODELS = {
  name: 'models',
  options: [
    {
      label: 'iPhone X',
      value: 'iphonex',
    },
    {
      label: 'iPhone 11',
      value: 'iphone11',
    },
    {
      label: 'iPhone 12',
      value: 'iphone12',
    },
    {
      label: 'iPhone 13',
      value: 'iphone13',
    },
    {
      label: 'iPhone 14',
      value: 'iphone14',
    },
    {
      label: 'iPhone 15',
      value: 'iphone15',
    },
  ],
} as const

export const MATERIALS = {
  name: 'material',
  options: [
    {
      label: 'Silicone',
      value: 'silicone',
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: 'Soft Polycarbonate',
      value: 'polycarbonate',
      description: 'Scratch-resistant coating',
      price: PRODUCT_PRICES.material.polycarbonate,
    },
    {
      label: 'Leather',
      value: 'leather',
      description: 'Premium quality leather',
      price: PRODUCT_PRICES.material.leather,
    },
  ],
} as const

export const FINISHES = {
  name: 'finish',
  options: [
    {
      label: 'Smooth',
      value: 'smooth',
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: 'Matte',
      value: 'matte',
      description: 'Amazing matte finish',
      price: PRODUCT_PRICES.finish.matte,
    },
    {
      label: 'Glossy',
      value: 'glossy',
      description: 'Shiny reflective finish',
      price: PRODUCT_PRICES.finish.glossy,
    },
  ],
} as const
